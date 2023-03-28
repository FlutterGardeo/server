const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        trim: true,
      },
      // price: {
      //   type: Number,
      //   required: true,
      // },
      // imageUrl:{
      //   type: String,
      //   required: true,
      //   trim: true,
      // },
      description: {
        type: String,
        required: true,
        trim: true,
      },
    },
    { timestamps: true }
  );
  
  const Service = mongoose.model("Service", serviceSchema);
  
  module.exports = Service;
  

