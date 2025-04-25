const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/myproducts", controller.myProducts);
router.get("/getproducts", controller.getProducts);
router.post("/addProduct", controller.addProduct);

module.exports = router;
