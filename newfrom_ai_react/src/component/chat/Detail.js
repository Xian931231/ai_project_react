import { useState, useRef, useEffect } from "react";
import Modal from "react-modal"
import { ModalType } from "./AiContent.js"
import util from "../../util/util.js";
import ReactMarkdown from 'react-markdown';

const Detail = ({openModal, closeModal, isMobile}) => {
    const [detailText, setDetailText] = useState("");
    const [cancel, setCancel] = useState(false);

    const btnRef = useRef(null);
    const ws = useRef(null); // 웹 소켓

    const closeBtnClick = () => {
        closeModal(ModalType.DETAIL, false);

        let resp = JSON.parse(sessionStorage.getItem("response"));
        if (!resp.detail) {
            ws.current.close();
            setDetailText(() => "");
            setCancel(() => true)
        }
    }

    useEffect(() => {
        if (openModal) {
            let resp = JSON.parse(sessionStorage.getItem("response"));
            setCancel(() => false);

            if (resp.detail == null || resp.detail == undefined) {
                const domain = util.getDomain();
                const socket = new WebSocket(`${domain}/api/ws`);
                ws.current = socket;
        
                socket.onopen = () => { // 소켓 연결시 이벤트
                    console.log("opened");
                    // btnRef.current.style.display = "none";

                    socket.send(JSON.stringify({
                        "question": resp.question,
                        "question_type": "DETAIL"
                    }));
                };
        
                socket.onmessage = (event) => {
                    let resp = JSON.parse(event.data);
        
                    if (resp) {
                        if (resp.data.type == "answer") {
                            setDetailText(text => text + resp.data.content);
                        }
                    }
                }
        
                socket.onclose = () => { // 소켓 해제시 이벤트 
                    setCancel((prev) => {
                        if (!prev) {
                            let resp = JSON.parse(sessionStorage.getItem("response"));
                            resp.detail = "o";
                            sessionStorage.setItem("response", JSON.stringify(resp));
                        }
                        return false;
                    });
                    
                    // btnRef.current.style.display = "block";
                    console.log("closed");
                };
            }
         }
    }, [openModal])

    return (
        <>
            <Modal isOpen={openModal} className={isMobile ? "modal": "pc-modal"} ariaHideApp={false} style={{overlay: {backgroundColor: "rgb(255,255,255, 0)"}}}>
                <button ref={btnRef} className="close-modal" onClick={closeBtnClick}></button>

                <div className={isMobile ? "explainPop modal": "explainPop pc-modal"}>
                    <div className="modal-header">
                        <h2>상세 설명</h2>
                    </div>
                    <div className="modal-content">
                        <div className="explain-wrap">
                            <dl className="explain-items text">
                                <ReactMarkdown>
                                    {detailText}
                                </ReactMarkdown>
                            </dl>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default Detail;