const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/flowershop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema + Model
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
const Product = mongoose.model("Product", ProductSchema);

// API
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.listen(3000, () => console.log("Server chạy http://localhost:3000"));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
