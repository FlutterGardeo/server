const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
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
    devices: [{
          type: mongoose.Schema.Types.ObjectId,
          unique:true,
          ref: "Device",
        }
      
    ], services: [
       {
          type: mongoose.Schema.Types.ObjectId,
          unique:true,
          ref: "Service",
        }
      
    ],
  
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;


