const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/cart");
const Service = require("../models/service");
const User = require("../models/user");

const router = express.Router();


router.post("/checkout", auth, async (req, res) => {
  console.log('received checkout request');
  const userId = req.userId;
  const total = req.body.total;

  try {
    // Update user tier points
    console.log('updating user tier points');
    console.log(total);


    try {
      const user = await User.findById({ user: userId });
      const currentTier = user.currentTier.toString();
      console.log(currentTier);
      var tierPoints;
      switch (currentTier) {
        case 'silver':
          tierPoints = total * 1;
        case 'gold':
          tierPoints = total * 2;
        case 'platinum':
          tierPoints = total * 3;
        default:
          tierPoints = total * 0.5;
      }

      // get current tierPoints from db and add to it
      const result = await User.updateOne(
        { user: userId },
        { $inc: { tierPoints: tierPoints } },
        { upsert: true }

      );

    } catch (error) {
      res.status(400).send(error);
    }

    // Delete from cart
    console.log('deleteing');
    const cart = await Cart.findOneAndDelete({ user: userId })
    res.send(cart)

  } catch (error) {
    res.status(400).send(error);
  }

});

module.exports = router;