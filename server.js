const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());

// const uri = "mongodb://localhost:27017/";
const uri =
  "mongodb+srv://rbartley2020:i6Kt4ydmkmg7OAa6@mari-cluster.xworobh.mongodb.net/";

const shopItemSchema = new mongoose.Schema({
  id: Number,
  file: String,
  name: String,
  price: Number,
  desciption: String,
});

const cartItemSchema = new mongoose.Schema({
  id: String,
  product_id: Number,
  quantity: Number,
  item: String,
  cost: Number,
  image: String,
  description: String,
});

async function connect() {
  try {
    await mongoose.connect(uri, { dbName: "store-database" });
    mongoose.model("shop-item", shopItemSchema);
    mongoose.model("cart-item", cartItemSchema);
    console.log("connected to MongoDb");
  } catch (error) {
    console.error(error);
    console.log("unable to connect");
  }
}

connect();

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

app.get("/api/shop-item", async (req, res) => {
  try {
    const shop_items = await mongoose.model("shop-item").find();
    res.json(shop_items);
    //res.send("GET REQUEST CALLED");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/cart-item", async (req, res) => {
  try {
    const cart_items = await mongoose.model("cart-item").find();
    res.json(cart_items);
    //res.send("GET REQUEST CALLED");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
