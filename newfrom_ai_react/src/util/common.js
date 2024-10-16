const ajax =  {
    send: async (url, method, data, successCallback) => {
        try {
            let _url = url;

            const header = {
                "Content-Type": "application/json",
            };

            const response = await fetch(_url, {
                method: method,
                headers: header,
                body: JSON.stringify(data),
            });

            response.json()
                .then(res => {
                    successCallback(res)
                })
                .catch(err => {
                    new Error(err);
                });
        } catch (err) {
            console.log(err);
        }
    },

    sendFile: async (url, method, data, successCallback) => {
        try {
            let _url = url;

            const response = await fetch(_url, {
                method: method,
                body: data
            });
    
            response.json()
                .then(res => successCallback(res))
                .catch(err => new Error(err));
        } catch (err) {
            console.log(err);
        }
    },
};

export default ajax;