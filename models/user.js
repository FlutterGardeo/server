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
    },
    currentTier: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;


