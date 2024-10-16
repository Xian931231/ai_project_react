import { useRef, useEffect, useState } from "react";
import Modal from "react-modal"
import { ModalType } from "./AiContent.js";
import util from "../../util/util.js";

const Document = ({openModal, closeModal, isMobile}) => {
    const [documentText, setDocumentText] = useState("");
    const [documentPage, setDocumentPage] = useState("");
    const [documentPath, setDocumentPath] = useState("");
    const [cancel, setCancel] = useState(false);

    const btnRef = useRef(null);
    const ws = useRef(null);

    const closeBtnClick = () => {
        closeModal(ModalType.DOCUMENT, false);
        ws.current.close();

        let resp = JSON.parse(sessionStorage.getItem("response"));
        if (!resp.document) {
            setCancel(() => true)
            setDocumentText(() => "");
            setDocumentPage(() => "");
            setDocumentPath(() => "");
        }
    }

    useEffect(() => {
        if (openModal) {
            let resp = JSON.parse(sessionStorage.getItem("response"));
            setCancel(() => false);

            if (resp.document == null || resp.document == undefined) {
                const domain = util.getDomain();
                const socket = new WebSocket(`${domain}/api/ws`);
                ws.current = socket;

                socket.onopen = () => { // 소켓 연결시 이벤트
                    console.log("opened");
                    // btnRef.current.style.display = "none";

                    socket.send(JSON.stringify({
                        "question": resp.question,
                        "question_type": "DOCUMENT"
                    }));
                };
        
                socket.onmessage = (event) => {
                    let resp = JSON.parse(event.data);
                    if (resp) {
                        if (resp.result) {
                            setDocumentText(() => resp.data.content);
                            setDocumentPage(() => resp.data.dic_page);
                            setDocumentPath(() => resp.data.file_path);
                        }
                    }
                }
        
                socket.onclose = () => {
                    setCancel((prev) => {
                        if (!prev) {
                            let resp = JSON.parse(sessionStorage.getItem("response"));
                            resp.document = "o";
                            sessionStorage.setItem("response", JSON.stringify(resp));
                        }
                        return false;
                    });

                    console.log("closed");
                };
            }
         }
    }, [openModal])

    const openDocument = (e) => {
        window.open(`${encodeURI(documentPath.replace(/\s/g, "+"))}#page=${documentPage}`, "_blank");
    }
    
    return (
        <>
            <Modal isOpen={openModal} className={isMobile ? "modal": "pc-modal"} ariaHideApp={false} style={{overlay: {backgroundColor: "rgb(255,255,255, 0)"}}}>
                <button ref={btnRef} className="close-modal" onClick={closeBtnClick}></button>

                <div className={isMobile ? "docuPop modal": "docuPop pc-modal"}>
                    <div className="modal-header">
                        <h2>문서 보기</h2>
                    </div>
                    <div className="modal-content">
                        <div className="docu-wrap">
                        <p className="text">
                            {documentText}<br/><br/>
                        </p>
                        <p className="text">
                            {documentPage ? documentPage + " 페이지" : ""}
                        </p>
                        <div className="button-wrap">
                            <button type="button" className="btn line" id="openPdf" onClick={openDocument} style={{display : documentPath ? "" : "none"}}>보기</button>
                        </div>
                        </div>
                    </div>
                </div>     
            </Modal>
        </>
    )
};

export default Document;