const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
  getOneProduct,
  updateProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/api/product/create", addProduct);

router.get("/api/product/get", getProducts);

router.get("/api/product/get/:id", getOneProduct);

router.put("/api/product/update/:id", updateProduct);

router.delete("/api/product/delete/:id", deleteProduct);

module.exports = router;
