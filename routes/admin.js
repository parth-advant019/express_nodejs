const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// rich /admin/add-product
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
