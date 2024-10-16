const popupEvent = function() {
    const width = 400;
    const height = 700;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
  
    const popupOption = `width=${width}, height=${height}, left=${left}, top=${top}, toolbar=no, location=no, status=no`;
    window.open("/popup", "AICC", popupOption);
}

const Test = () => {
    return (
        <>
            <button 
                type="button" 
                style={{width: "100px", height: "50px", border: "2px solid #ccc", position: "fixed", top: "45%", right: "45%"}}
                onClick={popupEvent}
            >
                팝업 버튼
            </button>
        </>
    )
}

export default Test;