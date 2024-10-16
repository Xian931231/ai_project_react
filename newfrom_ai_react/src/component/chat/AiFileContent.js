import util from "../../util/util";

const isMobile = util.isMobile();

const AiFileContent = () => {
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
                            사진을 첨부 하시겠습니까?
                        </p>
                        <div className="photo-wrap">
                        <div className="photo-view">
                                <img src="./assets/images/temp_photo.png" alt="" />
                            </div>
                            <div className="button-group">
                                <button type="button" className="button">사진 보관함</button>
                                <button type="button" className="button">사진 찍기</button>
                                <button type="button" className="button">파일 선택</button>
                                <button type="button" className="button">취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default AiFileContent;