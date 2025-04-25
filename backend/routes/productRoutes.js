const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/products", controller.getProducts);
router.post("/addProduct", controller.addProduct);

module.exports = router;
