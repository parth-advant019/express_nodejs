const path = require("path");
const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// rich /admin/add-product -> GET
router.get("/add-product", adminController.getAddProduct);

// rich /admin/products -> GET
router.get("/products", adminController.getProducts);

// rich /admin/add-product -> POST
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

module.exports = router;
