const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productColor: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  { collection: "products" }
);

module.exports = {
  productSchema: mongoose.model("productSchema", productSchema),
};
