require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productModel = require("../models/products");
const cloudinary = require("cloudinary").v2;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  productModel
    .find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

mongoose
  .connect(process.env.MONGODB_DB_CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.port, () => {
      console.log(
        "connected to the database and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Cannot Connect to the database and listen for port request");
  });
