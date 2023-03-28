const jwt = require("jsonwebtoken");
const jwksClient = require('jwks-rsa');

// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZlcnNpb24ifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.N4RUUBZtCicdDh11Qx-9S9PTPb37J-WsbHnT7iRgA_jw1Q20phuGzF-SV7sP9oq3V7AMbfmjsjKrvHrcwe0RW-1Y2uKlOeA7jyA9X3s7VpFDjNcMhJ85Z4_KfZtYDWjDdJhNB2vO9X_gy-JB-PMzI1E2QvKZlPwYcI6zH5x71x';

// const jwksClientInstance = jwksClient({
//     jwksUri: 'https://api.asgardeo.io/t/exampleorg/oauth2/jwks'
// });
const { AsgardeoExpressClient } = require("@asgardeo/auth-express");

const config = {
    clientID: "<YOUR_CLIENT_ID>",
    clientSecret: "<YOUR_CLIENT_SECRET>",
    baseUrl: "https://api.asgardeo.io/t/<org_name>",
    appURL: "http://localhost:3000",
    scope: ["openid", "profile"]
};

const authClient = AsgardeoExpressClient.getInstance(config);

const authCallback = (res, error) => {
    if (error) {
        res.status(400).send(error);
    }
    // Return true to end the flow at the middleware.
    return true;
};

//Create a new middleware to protect the route
const isAuthenticated = AsgardeoExpressClient.protectRoute(authCallback);


const auth = async (req, res, next) => {
    try {

        // const isAuth = await authClient.getIDToken(decoded.sub)
        // console.log(isAuth)

        // const user = await User.findOne({
        //     _id:decoded._id,
        //     "tokens.token":token
        // })

        // if(!user){
        //     throw new Error()
        // }

        // req.token = token;
        // req.user = user;

        next()

    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "Please Auth" })
    }

};

module.exports = auth;
