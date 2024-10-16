import { React, useState, useRef, useEffect } from "react";
import Top from "../../component/chat/Top.js";
import AiIntroduce from "../../component/chat/AiIntroduce.js";
import UserContent from "../../component/chat/UserContent.js";
import PrintFormat from "../../component/chat/PrintFormat.js";
import { AiContent } from "../../component/chat/AiContent.js";
import Modal from "react-modal";
import ajax from "../../util/common.js";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import util from "../../util/util.js";

const initChatList = [
    {
        type: "aiIntroduce",
        name: "AI 상담사",
        text: "AI 도우미 \"서비스\" 입니다.\n음성으로 말해주시면 답변해드리겠습니다."
    },
]

const printFormat = {
    type: "printFormat",
}

const playAudio = function(filePath, callback) {
    let audio_o = document.createElement("audio");
    audio_o.setAttribute("controls", "controls");
    audio_o.setAttribute("autoplay", "autoplay");

    audio_o.style.display = "none";

    let source_o = document.createElement("source");
    source_o.setAttribute("src", filePath);
    source_o.setAttribute("type", "audio/mp3");

    audio_o.appendChild(source_o);
    document.querySelector("body").appendChild(audio_o);

    audio_o.addEventListener("ended", () => {
        console.log("ended");
        audio_o.remove();

        if(typeof(callback) == "function") {
            callback();
        }
    });
}

/**
 * openModal: 모달 오픈 여부, 
 * closeModal: 모달 State setter 함수
 * parentCloseModal: 채팅 페이지에서 닫기 버튼 클릭 시 데모 페이지로 이동하기 위한 closeModal State 변수
 * enableVoiceRef: 음성 응답 사용 여부 ref (input[checkbox] 엘리먼트)
 */
const Chat = ({openModal, closeModal, parentCloseModal, voiceChecked, isPopup , isMobile}) => {
    const [inputVoice, setInputVoice] = useState(false); // 음성 입력 사용 여부
    const [chatList, setChatList] = useState([]); // 채팅 목록
    const [wait, setWait] = useState(false); // 사용자 입력 후 api 통신 여부
    const [summaryText, setSummaryText] = useState("");
    const [audioRemove, setAudioRemove] = useState(""); // 음성 응답 제거용
    const [respCheck, setRespCheck] = useState(true); // 응답 완료여부를 체크해서 상세,문서,영상 버튼을 활성/비활성화
    const [socketCloseCheck, setSocketCloseCheck] = useState(false); // 리셋여부
    
    const ws = useRef(null); // 웹 소켓
    const sendInputRef = useRef(""); // 서버로 전송될 사용자 입력(질문)
    const voiceToTextRef = useRef(""); // 결과를 음성 파일로 만들기 위한 값
    const closeBtnRef = useRef(null); // 모달에서 나가는 버튼
    const successAjaxRef = useRef(false); // 채팅 응답 만료 여부
    const scrollRef = useRef(null); // 페이지 스크롤을 위한 변수
    
    // 음성 인식 관련
    // const [resetTimeout, setResetTimeout] = useState(null);
    const {transcript, resetTranscript, finalTranscript} = useSpeechRecognition();

    // 브라우저가 지원되지 않을 때 
    // if (!browserSupportsSpeechRecognition) {
    //     // 지원하지 않을 때 표시할 양식
    // }

    useEffect(() => {
        if (openModal) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatList]);

    useEffect(() => {
        if (openModal) {
            if (inputVoice) {
                SpeechRecognition.startListening({ continuous: true, language: "ko" });
                console.log("음성 입력 시작");
            } else {
                SpeechRecognition.stopListening();
                resetTranscript();
                console.log("음성 입력 종료");
            }
        }
    }, [inputVoice]);

    useEffect(() => {
        if (inputVoice && finalTranscript) {
            // console.log(`finalTranscript : ${finalTranscript}`)
            if (!inputVoice) return;

            if (transcript === "키보드 입력" || transcript === "키보드입력") {
                setInputVoice(() => false);
                SpeechRecognition.stopListening();
                resetTranscript();
                return;
            } 

            setChatList((prev) => {
                return [
                    ...prev,
                    {
                        type: "userContent",
                        text : finalTranscript
                    }
                ]
            });
            setWait(() => true);
        }
    }, [finalTranscript]);
 
    useEffect(() => {
        if (openModal) {
            sessionStorage.clear();
            setChatList(() => initChatList);
            setInputVoice(() => true);
            setRespCheck(() => true);
        }
    }, [openModal])

    useEffect(() => {
        if (openModal && !socketCloseCheck) {
            const domain = util.getDomain();
            const socket = new WebSocket(`${domain}/api/ws`);
            ws.current = socket;

            socket.onmessage = (event) => {
                let resp = JSON.parse(event.data);
                if (!resp) return;

                if (resp.result) {
                    if (resp.data.type == "start") {
                        setChatList((prev) => {
                            return [
                                ...prev,
                                {
                                    type: "aiContent",
                                    text : summaryText
                                }
                            ]
                        });
                    } else if (resp.data.type == "answer") {
                        
                        setSummaryText(text => {
                            const updatedText = text + resp.data.content;
                            voiceToTextRef.current = updatedText;
                            return updatedText;
                        });
                    } else if (resp.data.type == "end") {
                        setRespCheck(() => false);
                        setSocketCloseCheck(() => true);
                    }
                } else {
                    if (resp.data.type == "exceed_count") {
                        alert("채팅 제한 횟수를 초과했습니다.");
                        successAjaxRef.current = true;
                        SpeechRecognition.stopListening();
                        resetTranscript();
                        return;
                    }
                }
            };

            socket.onopen = () => { // 소켓 연결시 이벤트
                console.log("socket opened");
            };
            
            socket.onclose = async () => { // 소켓 해제시 이벤트 
                console.log("socket closed");
                // 현재 버전에서 gpt 응답 완료 시 음성 및 키보드 입력 비활성화
                SpeechRecognition.stopListening();
                resetTranscript();
                
                // if (successAjaxRef.current) {
                //     closeBtnRef.current.style.display = "block";
                // }

                // 음성 응답을 사용할 때만 실행
                if (voiceChecked && voiceToTextRef.current) {
                    const url = "/api/tts";
                    await ajax.send(url, "POST", {text: voiceToTextRef.current}, function(res) {
                        if (audioRemove) {
                            playAudio(res, function() {
                                let audio_o = document.querySelector("audio");
                                if(audio_o) {
                                    audio_o.remove();
                                }
                            })
                        } else {
                            playAudio(res)
                        }
                    });
                }
            };
        }
    }, [openModal, socketCloseCheck])

    useEffect(() => {
        if (wait) {
            document.querySelector("#writeText").value = "";

            let data = {};
            if (inputVoice) {
                data.question = finalTranscript;
            } else {
                data.question = sendInputRef.current;
        
                if (!sendInputRef.current) return;
            }
    
            const url = "/api/verify/question"
            const method = "POST";
            ajax.send(url, method, data, function(res) {
                sessionStorage.setItem("response", JSON.stringify({
                    question: data.question,
                }));
    
                if (res.result) {
                    // closeBtnRef.current.style.display = "none";
                    successAjaxRef.current = true;
                    SpeechRecognition.stopListening();
                    resetTranscript();

                    document.querySelector("#userInput").style.display = "none";
                    ws.current.send(JSON.stringify({
                        "question": data.question,
                        "question_type": "SUMMARY"
                    }));
                } else {
                    resetTranscript();
                    setChatList((prev) => {
                        return [
                            ...prev,
                            printFormat
                        ]
                    });
                }
            });
    
            setWait(() => false);
        }
    }, [wait])

    // 모달 닫기 버튼 클릭 시
    const closeBtnClick = () => {
        const res = window.confirm("채팅을 종료하시겠습니까?");
        if (res) {
            if (isPopup) {
                window.parent.postMessage('closeIframe', '*');
                // window.location.href = "about:blank";
                // window.close();
            }

            successAjaxRef.current = false;
            closeModal(() => false);
            ws.current.close();
            setAudioRemove(true);
            setSummaryText("");
            setSocketCloseCheck(() => false);

            if (inputVoice) {
                setInputVoice(() => false);
                document.querySelector("#writeText").value = "";
            }

            parentCloseModal(() => false);
        }
    }

    const selectInputVoice = (flag) => {
        setInputVoice(flag);
    }

    const textareaChange = (e) => {
        const target = e.target;
        const DEFAULT_HEIGHT = 0;
        target.style.height = 0;
        target.style.height = DEFAULT_HEIGHT + target.scrollHeight + "px";
    }

    const handleUserInput = (e) => {
        const eType = e.type;
        
        if (eType === "click") { // 클릭
            setUserInputText();
            setWait(() => true);
        } 
    };

    const setUserInputText = () => {
        const target = document.querySelector("#writeText");
        const appendList = [
            ...chatList, 
            {
                type: "userContent",
                text : target.value
            }
        ];

        setChatList(() => appendList);
        sendInputRef.current = target.value;
        target.style.height = "auto";
    }

    return (
        <>  
            <Modal isOpen={openModal} className={isMobile ? "modal": "pc-modal"} ariaHideApp={false} style={{overlay: {backgroundColor: "rgb(255,255,255, 0)"}}}>
                <button className="close-modal" ref={closeBtnRef} onClick={() => closeBtnClick()}></button>
                <div className={isMobile ? "chatWindow modal": "chatWindow pc-modal"}>
                    <Top selectInputVoice={selectInputVoice} clearChat={successAjaxRef} transcript={transcript} inputVoice={inputVoice} resetObj={{speechRecognition: SpeechRecognition, resetTranscript, setChatList, setSummaryText, initChatList, socketCloseCheck, setSocketCloseCheck}}/>
                    <div className="modal-content">
                        <div className="talk-wrap set01">
                            {chatList.map((chat, i) => {
                                let type = chat.type;
                                switch(type) {
                                    case "aiIntroduce": // gpt 소개
                                        return <AiIntroduce key={i} uid={chat.name} text={chat.text} isMobile={isMobile}/>
                                    case "userContent": // 사용재 쿼리
                                        return <UserContent key={i} text={chat.text} isMobile={isMobile}/>
                                    case "printFormat": // 양식 출력
                                        return <PrintFormat key={i} isMobile={isMobile}/>
                                    case "aiContent": // ai 답변
                                        return <AiContent key={i} text={summaryText} respCheck={respCheck} isMobile={isMobile}/>
                                    default:
                                        break;
                                }
                            })}
                            <div id="scrollIocaltion" ref={scrollRef}></div>
                        </div>
                        {/* <!-- 입력창 --> */}
                        <div className="write-wrap" id="userInput" style={{display : inputVoice ? "none" : ""}}>
                            <textarea id="writeText" className="input-control" rows={1} onInput={textareaChange} style={{resize: "none"}}></textarea>
                            <button type="button" className="btn" onClick={handleUserInput}></button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Chat;