import { useState, useEffect } from "react";
import AICC from "./AICC.js"

window.addEventListener("resize", function(e) {
    if (e.target.name === "AICC") {
        e.target.resizeTo(400, 700);    
    }
});

const AICCWrap = () => {
    const [openChat, setOpenChat] = useState(true);

    return (
        <>
            <AICC openModal={openChat} closeModal={setOpenChat} isPopup={true}/>
        </>
    )
}

export default AICCWrap;