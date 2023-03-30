const express = require("express");
const auth = require("../middleware/auth");
const Device = require("../models/device");

const router = express.Router();

router.post("/device", async (req, res) => {
    const device = new Device({
        ...req.body,
    });

    try {
        await device.save();
        res.status(201).send(device);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/device", async (req, res) => {

    try {
        const devices = await Device.find({})

        res.status(200).send(devices);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch("/device/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const updatedDevice = await Device.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
  
      if (!updatedDevice) {
        return res.status(404).send();
      }
      res.status(200).send(updatedDevice);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.delete("/device/:id", async (req, res) => {
    const _id = req.params.id;

    try {
      const deletedDevice = await Device.findByIdAndDelete(_id);
  
      if (!deletedDevice) {
        return res.status(404).send();
      }
  
      return res.status(200).send(deletedDevice);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;