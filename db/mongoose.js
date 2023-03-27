const mongoose = require("mongoose");

const monogdbURL =
  "mongodb+srv://fluttergardeo:dGXxaYefzxoxi4tT@fluttergardeo.xtfsbnu.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(monogdbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection
mongoose.set('strictQuery', true);

connection.once("open",()=>{
    console.log("MongoDB connected!")
})