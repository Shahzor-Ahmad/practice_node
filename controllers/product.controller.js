const express = require("express");
const app = express();
app.use(express.json());
const { productSchema } = require("../models/product.model");

const addProduct = (req, res) => {
  const {
    productName,
    productPrice,
    productColor,
    productCategory,
    productDescription,
    productImage,
  } = req.body;

  const newProduct = new productSchema({
    productName,
    productPrice,
    productColor,
    productCategory,
    productDescription,
    productImage,
  });

  newProduct
    .save()
    .then(() => {
      res.json({ message: "Product Added Successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Product Creation Failed" });
    });
};

const getProducts = (req, res) => {
  productSchema
    .find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ message: "failed to fetch products" });
    });
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productSchema.findById(id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProduct = (req, res) => {
  const { id } = req.params;

  const {
    productName,
    productPrice,
    productColor,
    productCategory,
    productDescription,
    productImage,
  } = req.body;

  productSchema
    .findByIdAndUpdate(
      id,
      {
        productName,
        productPrice,
        productColor,
        productCategory,
        productDescription,
        productImage,
      },
      { new: true }
    )
    .then((updateproduct) => {
      if (updateproduct) {
        res.json(updateproduct);
      } else {
        res.status(404).json({ error: "Product not fornd" });
      }
    })
    .catch((error) => {
      console.error("Error updating product data:", error);
      res.status(500).json({ error: "Failed to update product data" });
    });
};

const deleteProduct = (req, res) => {
  // for the api like that "/delete?id=12345" use this
  //   const { id } = req.query;
  // for the endpoint like that "/delete/12345" use this
  const { id } = req.params;

  productSchema
    .findByIdAndDelete(id)
    .then((deleteProduct) => {
      if (deleteProduct) {
        res.json({ message: "Product Deleted Successfully" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    })
    .catch((error) => {
      res.status(404).json({ error: "failed to delete product" });
    });
};
module.exports = {
  addProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
