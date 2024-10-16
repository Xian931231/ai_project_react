const PrintFormat = ({isMobile}) => {
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
                        아래의 예시와 같이 상세하게 말해주시면 정확한 답변을 드릴 수 있습니다.<br/>
                        <br/>
                        모델명을 말씀해 주세요.<br/>
                        증상을 상세하게 말씀해 주세요.
                        </p>
                        <div className="example-area">
                            <span className="badge">예시</span>
                            <p className="text">
                                {/* 아래의 예시와 같이 상세하게 말해주시면 정확한 답변을 드릴 수 있습니다.<br/>
                                <br/> */}
                                갤럭시S24가 충전을 해도 전원이 켜지지 않아요.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrintFormat;