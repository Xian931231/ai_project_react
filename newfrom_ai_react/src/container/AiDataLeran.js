import { useSate, useRef } from "react";
import ajax from "../util/common.js"
// import dotenv from "dotenv" // 환경변수 
// dotenv.config();

const AiDataLearn = () => {
    const learnModelRef = useRef("");
    const learnTextRef = useRef("");
    const learnFileRef = useRef("");
    const videoLinkRef = useRef("");
    const videoNameRef = useRef("");

    const checkModelParam = function() {
        if (!learnModelRef.current.value) {
            return false;
        }

        return true;
    }

    const addLearnModel = function() {
        if (!checkModelParam()) {
            alert("모델을 입력해주세요.");
            return;
        }

        const url = "/api/learn/model";
        const method = "POST";
        const data = {
            text: learnModelRef.current.value   
        }

        ajax.send(url, method, data, function(res) {
            if (res.result) {
                alert("데이터 저장 완료");
                learnModelRef.current.value = "";
                return;
            }
        });
    }

    const checkTextParam = function() {
        if (!learnTextRef.current.value) {
            return false;
        }

        return true;
    }

    const addLearnText = function() {
        if (!checkTextParam()) {
            alert("학습시킬 텍스트를 입력해주세요.");
            return;
        }

        const url = "/api/learn/text";
        const method = "POST";
        const data = {
            text: learnTextRef.current.value
        }

        ajax.send(url, method, data, function(res) {
            if (res.result) {
                alert("데이터 저장 완료");
                learnTextRef.current.value = "";
                return;
            }
        });
    }

    const checkFileParam = function() {
        let file = learnFileRef.current.files[0];

        if (!file) {
            return false;
        }

        return true;
    }

    const checkLinkParam = function() {
        if ((!videoNameRef.current.value && videoLinkRef.current.value) || (videoNameRef.current.value && !videoLinkRef.current.value)) {
            return false;
        }

        return true;
    }

    const addLearnFile = function() {
        if (!checkFileParam()) {
            alert("문서 등록은 필수입니다.");
            return;
        }

        if (!checkLinkParam()) {
            alert("동영상 정보를 모두 입력해주세요.");
            return;
        }

        let formData = new FormData();
        let videoLink = videoLinkRef.current.value;
        let videoName = videoNameRef.current.value;

        if (videoLink && videoName) {
            formData.append("video_link", videoLink);
            formData.append("video_name", videoName);
        }

        formData.append("learn_file", learnFileRef.current.files[0]);

        const url = "/api/learn/file";
        const method = "POST";

        ajax.sendFile(url, method, formData, function(res) {
            if (res.result) {
                alert("데이터 저장 완료");
                learnFileRef.current.value = "";
                videoLinkRef.current.value = "";
                videoNameRef.current.value = "";
                return;
            }
        });
    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
            <div className="bg-outline-red wrapper">
                <div className="modal-header">
                    <div className="item-group">
                        {/* <!-- on,play className 추가시 변경 --> */}
                        <span className="ai-status play" ></span>
                        <button type="button" className="btn icon-camera"></button>
                        <button type="button" className="btn icon-keyboard" ></button>
                    </div>
                </div>
                <div className="content container">
                    <h1 className="mt-3">모델 등록</h1>
                    <div className="input-box">
                        <div className="input-group">
                            <textarea ref={learnModelRef} className="form-control" rows="5" placeholder="모델을 입력해주세요.&#10;모델은 개행(enter)으로 구분해서 입력해주세요."></textarea>
                            <button className="btn btn-primary" onClick={addLearnModel}>등록</button>
                        </div>
                    </div>

                    <h1 className="mt-3">텍스트 등록</h1>
                    <div className="input-box">
                        <div className="input-group">
                            <textarea ref={learnTextRef} className="form-control" rows="5" placeholder="답변을 입력해주세요.&#10;입력시 개행(enter)을 두번 하시면 여러개의 답변이 저장됩니다."></textarea>
                            <button className="btn btn-primary" onClick={addLearnText}>등록</button>
                        </div>                
                    </div>

                    <h1 className="mt-3">파일 등록</h1>
                    <div className="input-box">
                        <input type="file" className="form-control" ref={learnFileRef} />
                        <input className="mt-3 form-control" type="text" ref={videoLinkRef} placeholder="동영상 링크를 입력하세요." />
                        <input className="mt-3 form-control" type="text" ref={videoNameRef} placeholder="동영상 제목를 입력하세요." />
                        <div className="text-end mb-5">
                            <button className="mt-3 btn btn-primary" data-src="learning" data-act="clickSendFile" onClick={addLearnFile}>등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AiDataLearn;