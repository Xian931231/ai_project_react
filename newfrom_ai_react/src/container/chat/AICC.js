import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import Chat from "./Chat.js";
import util from "../../util/util.js";

let isMobile = util.isMobile();

const AICC = ( {openModal, closeModal, isPopup} ) => {
    const [openChat, setOpenChat] = useState(false);
    const [voiceChecked, setVoiceChecked] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        if (isPopup) {
            isMobile = true;
            setReload(() => !reload);
        }
    }, []);

    const closeBtnClick = () => {
        if (isPopup) {
            const res = window.confirm("채팅을 종료하시겠습니까?");
            if (res) {
                window.parent.postMessage('closeIframe', '*');
                // window.location.href = "about:blank";
                // window.close();
                closeModal(() => false);
            }
            return;
        }

        closeModal(() => false);
    }

    useEffect(() => {
        setVoiceChecked(() => false);
    }, [openModal])

    const handleVoiceCheck = () => {
        setVoiceChecked(() => !voiceChecked);
    }

    return (
        <>
            <div id="wrap">
                <Modal isOpen={openModal} className={isMobile ? "modal": "pc-modal"} ariaHideApp={false} style={{overlay: {backgroundColor: "rgb(255,255,255, 0)"}}}>
                    <button className="close-modal" onClick={closeBtnClick}></button>
                    <div className={isMobile ? "page-wrap_mobile modal": "page-wrap_mobile pc-modal"}>
                        <div className="page-wrap-box">
                            <div className={isMobile ? (isPopup ? "popup-page-head" : "page-head") : "pc-page-head"}>
                                <h1>AICC</h1>
                                <p className="page-head_desc">인공지능으로 빠르고 정확한 상담이 가능합니다.</p>
                            </div>
                            {isPopup && 
                                (
                                    <div className="page-sub-desc">
                                        <div className="pc-page-guide-text">
                                            ※ DEMO이며, AI 답변은 3회만 가능합니다.<br/>
                                            ※ 시작 후 자동으로 음성 인식 모드로 <br/>&ensp;&ensp;&nbsp;시작합니다. <br/>&ensp;&ensp;&nbsp;(마이크 권한을 허용해주세요)<br/>
                                            ※ 음성 인식을 끄려면 상단의 키보드 아이콘을 <br/>&ensp;&ensp;&nbsp;클릭하시면, 키보드 입력란이 나타납니다.<br/>
                                            ※ 현재 삼성 갤럭시S20~S24 모델에 <br/>&ensp;&ensp;&nbsp;최적화되어 있습니다.<br/>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="page-button">
                                <button type="button" className="btn-start lineType" onClick={() => setOpenChat(() => true)}>시작</button>
                            </div>
                            {!isPopup &&
                                (
                                    <div className={isMobile ? "page-guide-text": "pc-page-guide-text"}>
                                        ※ 현재 삼성 갤럭시S20~S24 모델에<br/>최적화되어 있습니다.
                                    </div>
                                )
                            }
                        </div>
                        <div className="response-switch-wrap">
                            <span className="response-switch-text">Voice Response</span>
                            <div className="input-wrap">
                                <input type="checkbox" id="btn-switch" onChange={handleVoiceCheck}/>
                                <label htmlFor="btn-switch"></label>
                            </div> 
                        </div>
                        <div className="page-footer">
                            <div className="page-footer-logo"></div>
                        </div>
                    </div>
                </Modal>
                <Chat openModal={openChat} closeModal={setOpenChat} parentCloseModal={closeModal} voiceChecked={voiceChecked} isPopup={isPopup} isMobile={isMobile}/>
            </div>
        </>
    )
}

export default AICC;