const jwt = require("jsonwebtoken");
const jwksClient = require('jwks-rsa');
const axios = require('axios');


const auth = async (req, res, next) => {
    try {

        // const data = new URLSearchParams();
        // data.append('token', 'eyJ4NXQiOiJOR1EyWkRNelltWTJObU5pTVdGa016SXpZekptWm1VeU1ERXpNamxsTTJWa016QTNNMlJpTURoaE5tSmhNVEUxT0Roall6WXlNbUZpWkdRNU5qVTRZUSIsImtpZCI6Ik5HUTJaRE16WW1ZMk5tTmlNV0ZrTXpJell6Sm1abVV5TURFek1qbGxNMlZrTXpBM00yUmlNRGhoTm1KaE1URTFPRGhqWXpZeU1tRmlaR1E1TmpVNFlRX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJjMjQyNjIwNy1mOTE1LTRjYjItOGI5ZC0zZTI0ZDExZDZhODgiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoieUttTlVfemRYV2kyaTd6RXdEbnN1Q3ljS0pnYSIsIm5iZiI6MTY3OTk5Njg0OSwiYXpwIjoieUttTlVfemRYV2kyaTd6RXdEbnN1Q3ljS0pnYSIsInNjb3BlIjoiZW1haWwgb3BlbmlkIHByb2ZpbGUiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9rZm9uZWxrXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjgwMDAwNDQ5LCJpYXQiOjE2Nzk5OTY4NDksImp0aSI6IjM5OTEwNjdiLTcwNjYtNGM1Mi05NjYyLTk4NzYxMjdmNjI2ZiIsImNsaWVudF9pZCI6InlLbU5VX3pkWFdpMmk3ekV3RG5zdUN5Y0tKZ2EiLCJlbWFpbCI6InJ1a0BydWsuY29tIn0.V04Ah5sO9-lYIGfv8D_6I8hgJ828uFLRf_LtfBHKOYijD80rlq3cZsuzKlHqw7Ow-BgG5625JKpXEpvvmAzHACcrIeO6n5qFlKrjv8M-vBAWQwny7DxIUi-vt9ReP3zPp4aFpx-5UsA69YyL9TGCc0575udl2bRKgFuauIpx-ETh-hts02OtcaoeZCDPqGKCcbnIuvd5JEtW0uwavGgXrelxVum2_AarEBl1E26vlClLMJGbQygihmtt1qbz8ppw4yksnG5qOx0NxUzt2koZNp1505HtdhThZWX5DV02FbMNDarSTyD2r9sB6Sby54inEQl5RnFH1w5z8usNVwvX-w');
        

        // const headers = {
        //     'Authorization':'Basic eUttTlVfemRYV2kyaTd6RXdEbnN1Q3ljS0pnYTpaSFlQNkNzSW93ckFDYjJkMU8xU2pxSm45TlVh',
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   };
          
        //   // Define the URL for the request
        //   const url = 'https://api.asgardeo.io/t/kfonelk/oauth2/introspect';
          
        //   // Make the request
        //   axios.post(url, data, { headers })
        //     .then(response => {
        //       if(response.data.active){
        //         next()
        //       }else{

        //       }
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });

        var config = {
            method: 'get',
            url: 'https://api.asgardeo.io/t/kfonelk/oauth2/jwks',
            headers: {}
        };
        
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    next()

    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "Please Auth" })
    }

};

module.exports = auth;
