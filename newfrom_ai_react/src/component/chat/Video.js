import { useState, useRef, useEffect } from "react";
import Modal from "react-modal"
import { ModalType } from "./AiContent";
import util from "../../util/util";

const Video = ({openModal, closeModal, isMobile}) => {
    const [videoText, setVideoText] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [cancel, setCancel] = useState(false);

    const btnRef = useRef(null);
    const ws = useRef(null); // 웹 소켓

    const closeBtnClick = () => {
        closeModal(ModalType.VIDEO, false);

        let resp = JSON.parse(sessionStorage.getItem("response"));
        if (!resp.video) {
            ws.current.close();
            setVideoText(() => "");
            setVideoLink(() => "");
            setCancel(() => true)
        }
    }

    useEffect(() => {

        if (openModal) {
            let resp = JSON.parse(sessionStorage.getItem("response"));
            if (resp.video == null || resp.video == undefined) {
                const domain = util.getDomain();
                const socket = new WebSocket(`${domain}/api/ws`);
                ws.current = socket;
        
                socket.onopen = () => { // 소켓 연결시 이벤트
                    console.log("opened");
                    // btnRef.current.style.display = "none";

                    socket.send(JSON.stringify({
                        "question": resp.question,
                        "question_type": "VIDEO"
                    }));
                };
        
                socket.onmessage = (event) => {
                    let resp = JSON.parse(event.data);
                    if (resp) {
                        if (resp.result) {
                            setVideoText(() => resp.data.content);
                            setVideoLink(() => (<iframe src={resp.data.file_path} width="100%" height="100%"></iframe>))
                        }
                    }
                }
        
                socket.onclose = () => { // 소켓 해제시 이벤트 
                    setCancel((prev) => {
                        if (!prev) {
                            let resp = JSON.parse(sessionStorage.getItem("response"));
                            resp.video = "o";
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
                <div className={isMobile ? "moviePop modal": "moviePop pc-modal"}>
                    <div className="modal-header">
                        <h2>동영상</h2>
                    </div>
                    <div className="modal-content">
                        <div className="movie-wrap">
                        <p className="text">
                            {videoText}
                        </p>
                        <div className="movieFrame">
                            <div className="movieBig">
                                {videoLink}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default Video;
