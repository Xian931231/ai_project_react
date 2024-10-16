import { useState, useRef, useEffect } from "react";
import Detail from "./Detail.js";
import Document from "./Document.js";
import Video from "./Video.js";
import ReactMarkdown from 'react-markdown';

const ModalType = {
    DETAIL: "detail",
    VIDEO: "video",
    DOCUMENT: "document"
}

const AiContent = ({text, respCheck, isMobile}) => {
    const [detailModal, setDetailModal] = useState(false);
    const [videoModal, setVideoModal] = useState(false);
    const [documentModal, setDocumentModal] = useState(false);

    useEffect(() => {
        if (respCheck) {
            const btnArr = document.querySelectorAll(".option-btn");
            btnArr.forEach(btn => {
                btn.setAttribute("disabled", true);
            })
        } else {
            const btnArr = document.querySelectorAll(".option-btn");
            btnArr.forEach(btn => {
                btn.disabled = false;
            })
        }
        
    }, [respCheck])

    const setModal = (modalType, flag) => {
        switch(modalType) {
            case "detail": 
                setDetailModal(flag);
                break;
            case "video": 
                setVideoModal(flag);
                break; 
            case "document": 
                setDocumentModal(flag);
                break;
            default:
                break;
        }
        let audio_o = document.querySelector("audio");
        if(audio_o) {
            audio_o.remove();
        }
    }

    return (
        <>
            <div className="talk-items aiTalk">
                <div className="talk-avatar"><img src="./assets/images/temp_photo.png" alt="" /></div>
                <div className="talk-box">
                    <div className="talk-name">AI 상담사</div>
                    <div className={isMobile ? "talk-balloon" : "talk-balloon web"}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H8V8L0 0Z" fill="#000"/>
                        </svg> 
                        <p className="text">
                            <ReactMarkdown>
                                {text}
                            </ReactMarkdown>
                        </p>
                        <div className="detail-wrap">
                            <div className="icon-group">
                                <button type="button" className="icon-btn good active"></button>
                                <button type="button" className="icon-btn bad"></button>
                                <button type="button" className="icon-btn copy"></button>
                            </div>
                            <div className="button-group">
                                <button type="button" className="button option-btn" onClick={() => setModal(ModalType.DETAIL, true)} disabled={respCheck}>상세 설명 보기</button>
                                <button type="button" className="button option-btn" onClick={() => setModal(ModalType.VIDEO, true)} disabled={respCheck}>동영상 보기</button>
                                <button type="button" className="button option-btn" onClick={() => setModal(ModalType.DOCUMENT, true)} disabled={respCheck}>문서 보기</button>
                            </div>
                        </div>
                        <Detail openModal={detailModal} closeModal={setModal} isMobile={isMobile}/>
                        <Video openModal={videoModal} closeModal={setModal} isMobile={isMobile}/>
                        <Document openModal={documentModal} closeModal={setModal} isMobile={isMobile}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export { AiContent, ModalType };