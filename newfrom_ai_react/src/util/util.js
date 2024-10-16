const util = {
    getDomain: () => {
        const location = window.location;
        const scheme = location.protocol.indexOf("https") > -1 ? "wss://" : "ws://";
        const domain = scheme + location.host; 

        return domain;
    },

    isMobile: () => {
        // console.log(navigator.userAgent);
        let regExp = /iPhone|iPad|iPod|Android/i;
        return regExp.test(navigator.userAgent);
      }
}

export default util;