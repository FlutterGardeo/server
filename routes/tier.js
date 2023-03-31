const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/cart");
const Service = require("../models/service");

const router = express.Router();

router.post("/checkout", auth, async (req, res) => {
  console.log('received checkout request');
  const userId = req.userId;
  const total = req.body.total;

  try {
    console.log('deleteing');
    const cart = await Cart.findByIdAndDelete({ user: userId })

  } catch (error) {
    res.status(400).send(error);
  }

});

module.exports = router;