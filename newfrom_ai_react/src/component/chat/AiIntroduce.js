const AiIntroduce = ({uid, text, isMobile}) => {
    return (
        <>
            <div className="talk-items aiTalk">
                <div className="talk-avatar"><img src="./assets/images/temp_photo.png" alt="" /></div>
                <div className="talk-box">
                    <div className="talk-name">{uid}</div>
                    <div className={isMobile ? "talk-balloon" : "talk-balloon web"}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H8V8L0 0Z" fill="#000"/>
                        </svg> 
                        <p className="text">
                        {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AiIntroduce;