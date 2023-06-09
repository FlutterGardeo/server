const express = require("express");
const Service = require("../models/service");

const router = express.Router();

router.post("/service", async (req, res) => {
    const service = new Service({
        ...req.body,
    });

    try {
        await service.save();
        res.status(201).send(service);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/service", async (req, res) => {

    try {
        const services = await Service.find({})

        res.status(200).send(services);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch("/service/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const updatedService = await Service.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
  
      if (!updatedService) {
        return res.status(404).send();
      }
      res.status(200).send(updatedService);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.delete("/service/:id", async (req, res) => {
    const _id = req.params.id;

    try {
      const deletedService = await Service.findByIdAndDelete(_id);
  
      if (!deletedService) {
        return res.status(404).send();
      }
  
      return res.status(200).send(deletedService);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;