
const RESTClient = {

    /**
     * 
     * @param {*} options (contains HTTP Method, URL, timeout, queryParams, postData)
     * @param {*} successCallBack  
     * @param {*} failureCallBack 
     */
    makeRequest(options, callBackScope, successCallBack, failureCallBack) {

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                var responseObj = JSON.parse(this.responseText);
                if (this.status === 200) {
                    successCallBack.call(callBackScope, responseObj);
                } else {
                    failureCallBack.call(callBackScope, responseObj);
                }
            }
        };
        xhttp.open(options.method ? options.method : 'GET', options.url, true);
        xhttp.onerror = function(e) {
            console.log('service request encountered unexpected error');
            failureCallBack.call(callBackScope);
        };
        try {
            xhttp.send();
        } catch (ex) {
            console.log('service request encountered unexpected error');
            failureCallBack.call(callBackScope, ex);
        }
    }

};

export default RESTClient;