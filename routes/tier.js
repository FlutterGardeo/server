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

  var currentTier;
  var tierPoints;
  var totalTierPoints = 0;

  try {
    // Update user tier points
    console.log('updating user tier points');
    try {

      const user = await User.find({ user: userId });
      if (user.length === 0) {
        currentTier = '';
        console.log('user not found');
      } else {
        currentTier = user.currentTier.toString();
        totalTierPoints = user.tierPoints;
      }

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

      totalTierPoints += tierPoints;

      if (totalTierPoints >= 500) {
        currentTier = 'platinum';
      } else if (totalTierPoints >= 300) {
        currentTier = 'gold';
      } else if (totalTierPoints >= 100) {
        currentTier = 'silver';
      } else {
        currentTier = '';
      }

      console.log('total tierPoints ' + totalTierPoints)
      console.log('tier is ' + currentTier);


      // get current tierPoints from db and add to it
      const result = await User.findOneAndUpdate({
        user: userId,

      },
        {
          tierPoints: totalTierPoints,
          currentTier: currentTier
        }, {
        upsert: true,
      }
      )

      // const result = await User.updateOne(
      //   { user: userId },
      //   { $inc: { tierPoints: tierPoints } },
      //   { upsert: true }

      // );

      console.log(result);



    } catch (error) {
    }

    // Delete from cart
    console.log('deleteing');
    const cart = await Cart.findOneAndDelete({ user: userId });

  } catch (error) {
    res.status(400).send(error);
  }

});

module.exports = router;