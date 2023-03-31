const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    tierPoints: {
      type: Number,
      required: true,
    },
    currentTier: {
      type: String,
      required: true,
      default: ""
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;


