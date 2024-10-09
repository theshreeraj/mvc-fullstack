const express = require("express");
const { getProducts } = require("../controllers/productController.js")

const router = express.Router();

router.get("/", getProducts);


module.exports = router;