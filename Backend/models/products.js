const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  slug: String,
  name: String,
  image: [
    {
      mobile: String,
      tablet: String,
      desktop: String,
    },
  ],
  category: String,
  categoryImage: [
    {
      mobile: String,
      tablet: String,
      desktop: String,
    },
  ],
  new: String,
  price: Number,
  description: String,
  features: String,
  includes: [
    {
      quantity: Number,
      item: String,
    },
  ],
  others: [
    {
      slug: String,
      name: String,
      image: {
        mobile: String,
        tablet: String,
        desktop: String,
      },
    },
  ],
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
