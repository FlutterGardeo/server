const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const deviceSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
      },
      imageUrl:{
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      manufacturer: {
        type: String,
        required: true,
        trim: true,
      },
    },
    { timestamps: true }
  );
  
  const Device = mongoose.model("Device", deviceSchema);
  
  module.exports = Device;
  

