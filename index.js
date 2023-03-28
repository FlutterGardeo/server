// const express = require("express");
// require("./db/mongoose")
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const deviceRouter = require("./routes/device")
// // const taskRouter = require("./routes/task")




// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(deviceRouter)
// // app.use(taskRouter)

// const port = 3000;

// app.listen(port, () => {
//   console.log("Server is up and running on port " + port);
// });


//##################################################

//Import Express
const express = require('express');

// Import Cookie Parser to access request cookies.
const cookieParser = require('cookie-parser');

// The SDK provides a client middleware that can be used to carry out the authentication.
const { AsgardeoExpressClient } = require("@asgardeo/auth-express");


// Create a config object containing the necessary configurations.
const config = {
  clientID: "yKmNU_zdXWi2i7zEwDnsuCycKJga",
  clientSecret: "ZHYP6CsIowrACb2d1O1SjqJn9NUa",
  baseUrl: "https://api.asgardeo.io/t/kfonelk",
  appURL: "http://localhost:3000",
  scope: ["openid", "profile"]
};

//Initialize an Express App
const app = express();

// Use cookie parser in the Express App.
app.use(cookieParser())

//Initialize Asgardeo Express Client
const authClient = AsgardeoExpressClient.getInstance(config);

//Define onSignIn method to handle successful sign in
const onSignIn = (res, response) => {
  if (response) {
    res.status(200).send(response);
  }
};

//Define onSignOut method to handle successful sign out
const onSignOut = (res) => {
  res.status(200).send("Sign out successful");
};

//Define onError method to handle errors
const onError = (res, error) => {
  if(error){
    res.status(400).send(error);
  }
};

//Use the Asgardeo Auth Client
app.use(
  AsgardeoExpressClient.asgardeoExpressAuth(onSignIn, onSignOut, onError)
);

//At this point the default /login and /logout routes should be available.
//Users can use these two routes for authentication.

//A regular route
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

//A Protected Route

//Define the callback function to handle unauthenticated requests
const authCallback = (res, error) => {
  if(error){
    res.status(400).send(error);
  }
  // Return true to end the flow at the middleware.
  return true;
};

//Create a new middleware to protect the route
const isAuthenticated = AsgardeoExpressClient.protectRoute(authCallback);

app.get("/protected", isAuthenticated, (req, res) => {
    res.status(200).send("Hello from Protected Route");
});

//Start the express app on PORT 3000
app.listen(3000, () => { console.log(`Server Started at PORT 3000`);});

