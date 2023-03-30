const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    devices: [{
          type: mongoose.Schema.Types.ObjectId,
         
          ref: "Device",
        }
      
    ], services: [
       {
          type: mongoose.Schema.Types.ObjectId,
          
          ref: "Service",
        }
      
    ],
  
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;


