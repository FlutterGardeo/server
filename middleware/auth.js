const jwt = require("jsonwebtoken");
const jwksClient = require('jwks-rsa');
const axios = require('axios');
const { JwtRsaVerifier } = require("aws-jwt-verify");


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
        //         console.log(response.data)
        //         next()
        //       }else{
        //         console.log(response.data)
        //       }
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });

        // var config = {
        //     method: 'get',
        //     url: 'https://api.asgardeo.io/t/kfonelk/oauth2/jwks',
        //     headers: {}
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        ////////////////////////////////////

        const token = req.header("Authorization").replace("Bearer ","")
        // const decoded = jwt.decode("eyJ4NXQiOiJOR1EyWkRNelltWTJObU5pTVdGa016SXpZekptWm1VeU1ERXpNamxsTTJWa016QTNNMlJpTURoaE5tSmhNVEUxT0Roall6WXlNbUZpWkdRNU5qVTRZUSIsImtpZCI6Ik5HUTJaRE16WW1ZMk5tTmlNV0ZrTXpJell6Sm1abVV5TURFek1qbGxNMlZrTXpBM00yUmlNRGhoTm1KaE1URTFPRGhqWXpZeU1tRmlaR1E1TmpVNFlRX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMGZmNmUwMS1lYjRhLTQxM2UtOGUxOS1jYjQxOTZhNmVmY2EiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiaXNzIjoiaHR0cHM6XC9cL2FwaS5hc2dhcmRlby5pb1wvdFwva2ZvbmVsa1wvb2F1dGgyXC90b2tlbiIsImdpdmVuX25hbWUiOiJOb3JtYWwiLCJjbGllbnRfaWQiOiJ5S21OVV96ZFhXaTJpN3pFd0Ruc3VDeWNLSmdhIiwiYXVkIjoieUttTlVfemRYV2kyaTd6RXdEbnN1Q3ljS0pnYSIsIm5iZiI6MTY4MDE4MTk1MiwiYXpwIjoieUttTlVfemRYV2kyaTd6RXdEbnN1Q3ljS0pnYSIsInNjb3BlIjoiZW1haWwgZ3JvdXBzIG9wZW5pZCBwcm9maWxlIiwiZXhwIjoxNjgwMTg1NTUyLCJpYXQiOjE2ODAxODE5NTIsImZhbWlseV9uYW1lIjoiVXNlciIsImp0aSI6IjU1MmI1NTNjLWYwNDUtNGQ1Ny04ZWFiLTczOGMxYTYwMDZkMiIsImVtYWlsIjoibm9ybWFsQGdtYWlsLmNvbSJ9.Qrk0_qo_wjt7VC9tNLKSGbixXxrTHhrVkcNNtiWhv6Js4FEuhO7OSaSdRGoB92SDODKnNvADtMNgyGXjBw8qj4gN1dFk_MAhRmjDXqwfTdrkQGXOsCpLc1TCOr3KaDC0c8Iyq-XPfmwqngBzg_to9MoXjolnOWZfzF-lhZ1cyrQVFzDJEcBYnT2uwAfRoASu9eLKp01zljRRnOxefw1gspflvuGokTkK3jpHID9XCx6poDGDfE_1_qWeilNlzIQLkcDIODCp_WnTc4MA4w_Nnn0mokLNa3hqKTeVEwF30dtymzecKc-uHW2JfyV0s7TehFmt-hRlFUyE1cIwsLNkKg");
        // console.log(decoded)

        const verifier = JwtRsaVerifier.create({
            issuer: "https://api.asgardeo.io/t/kfonelk/oauth2/token", // set this to the expected "iss" claim on your JWTs
            audience: "yKmNU_zdXWi2i7zEwDnsuCycKJga", // set this to the expected "aud" claim on your JWTs
            jwksUri: "https://api.asgardeo.io/t/kfonelk/oauth2/jwks", // set this to the JWKS uri from your OpenID configuration
        });

        try {
            const payload = await verifier.verify(token);
            req.userId = payload.sub
            console.log("Token is valid. Payload:", payload);
            next()
        } catch (error) {
            console.log(error);
            res.status(401).send({ error: "Please Auth" })
        }

       
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "Please Auth" })
    }

};

module.exports = auth;
