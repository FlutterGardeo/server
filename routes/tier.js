const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/cart");
const Service = require("../models/service");

const router = express.Router();

router.post("/checkout",async (req, res) => {
  console.log('received checkout request');
  const userId = req.body.userId;
  const total = req.body.total;

  try {
    console.log('deleteing');
    const cart = await Cart.findOneAndDelete({ user: userId })
    res.send(cart)

  } catch (error) {
    res.status(400).send(error);
  }

});

module.exports = router;