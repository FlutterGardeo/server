const express = require("express");
require("./db/mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const deviceRouter = require("./routes/device")
// const taskRouter = require("./routes/task")




const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(deviceRouter)
// app.use(taskRouter)

const port = 3000;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
