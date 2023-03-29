const express = require("express");
const Cart = require("../models/cart");
const Service = require("../models/service");

const router = express.Router();

router.post("/add", async (req, res) => {
  const userId = req.body.userId;
  const itemId = req.body.itemId;
  //body should caontain where this is device or a service
  const itemType = req.body.itemType

  try {
    const cart = await Cart.findOne({ user: userId })

    if (!cart) {
      const newcart = new Cart({ user: userId, devices: [], services: [] })

      if (itemType == "device") {
        newcart.devices.push(itemId)
      } else {
        newcart.services.push(itemId)
      }
      await newcart.save();
      res.status(200).send(newcart);
    } else {
      if (itemType == "device") {
        cart.devices.push(itemId)
      } else {
        cart.services.push(itemId)
      }
      await cart.save();
      res.status(200).send(cart);
    }

  } catch (error) {
    res.status(400).send(error);
  }

});

router.post("/remove", async (req, res) => {
  const userId = req.body.userId;
  const itemId = req.body.itemId;
  //body should caontain where this is device or a service
  const itemType = req.body.itemType
  console.log(itemId)
  try {
    const cart = await Cart.findOne({ user: userId })

    if (!cart) {
      res.status(400).send(error);
    } else {
      if (itemType == "device") {
        cart.devices = cart.devices.filter((device) =>
          device != itemId
        )
      } else {
        cart.services = cart.services.filter((service) => service != itemId)
      }
      await cart.save();
      res.status(200).send(cart);
    }

  } catch (error) {
    res.status(400).send(error);
  }

});

router.get("/cart/devices", async (req, res) => {
  const userId = req.body.userId;
  try {
    const cart = await Cart.findOne({ user: userId })
      .populate({
        path: "devices",
      })

    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/cart/services", async (req, res) => {
  const userId = req.body.userId;
  try {
    const cart = await Cart.findOne({ user: userId })
      .populate({
        path: "services",
      })

    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = router;