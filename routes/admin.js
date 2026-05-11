const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

// rich /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
