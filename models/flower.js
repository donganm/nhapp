const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  name: { type: String, required: true },          // Tên hoa
  meaning: { type: String, required: true },       // Ý nghĩa
  origin: { type: String, required: true },        // Nguồn gốc
  usage: { type: String },                         // Cách sử dụng
  createdAt: { type: Date, default: Date.now }     // Ngày thêm
});

module.exports = mongoose.model("Flower", flowerSchema);
