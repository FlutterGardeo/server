const express = require("express");
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

        res.status(201).send(devices);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;