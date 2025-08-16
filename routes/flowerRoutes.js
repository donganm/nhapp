const express = require("express");
const Flower = require("../models/Flower");
const router = express.Router();

// Lấy tất cả hoa
router.get("/", async (req, res) => {
  const flowers = await Flower.find();
  res.json(flowers);
});

// Lấy 1 hoa theo id
router.get("/:id", async (req, res) => {
  const flower = await Flower.findById(req.params.id);
  res.json(flower);
});

// Thêm hoa mới
router.post("/", async (req, res) => {
  const flower = new Flower(req.body);
  await flower.save();
  res.json(flower);
});

module.exports = router;
