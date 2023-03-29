const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
    devices: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Device",
        }
      }
    ], services: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Service",
        }
      }
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;


