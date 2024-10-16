import { useState, useRef, useEffect } from "react";

const Top = ({selectInputVoice, clearChat, inputVoice, transcript, resetObj}) => {
    const [voiceClass, setVoiceClass] = useState("ai-status play");
    
    const voiceBtnRef = useRef(null);
    const keyboardBtnRef = useRef(null);

    const selectVoice = () => {
        if (!clearChat.current) {
            selectInputVoice(() => true);
        }

        if (resetObj.socketCloseCheck) {
            console.log("[채팅 리셋]");
            clearChat.current = false;
            resetObj.speechRecognition.startListening({ continuous: true, language: "ko" });
            resetObj.resetTranscript();
            resetObj.setChatList(() => resetObj.initChatList);
            resetObj.setSummaryText(() => "");
            resetObj.setSocketCloseCheck(() => false);
            selectInputVoice(() => true);
            sessionStorage.clear();
        }
    }

    const selectKeyboard = () => {
        if (!clearChat.current) {
            selectInputVoice(() => false);
        }
    }

    useEffect(() => {
        if (inputVoice && transcript) {
            setVoiceClass(() => "ai-status play");
        } else if(inputVoice) {
            setVoiceClass(() => "ai-status on");
        } else if (!inputVoice) {
            setVoiceClass(() => "ai-status");
        }
    }, [inputVoice, transcript])

    return (
        <>
            <div className="modal-header">
                <div className="item-group">
                    {/* <!-- on,play className 추가시 변경 --> */}
                    <span className={voiceClass} ref={voiceBtnRef} style={{cursor : "pointer"}} onClick={selectVoice}></span>
                    {/* <button type="button" className="btn icon-camera"></button> */}
                    <button type="button" className="btn icon-keyboard" ref={keyboardBtnRef} onClick={selectKeyboard}></button>
                </div>
                
            </div>
        </>
    )
}

export default Top;