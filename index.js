const express = require("express");
require("./db/mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const deviceRouter = require("./routes/device")
const serviceRouter = require("./routes/service")
const cartRouter = require("./routes/cart")




const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(deviceRouter)
app.use(serviceRouter)
app.use(cartRouter)
// app.use(taskRouter)

const port = 3000;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
