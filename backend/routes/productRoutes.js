const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/myproducts", controller.myProducts);
router.get("/getproducts", controller.getProducts);
router.get("/getproduct/:slug", controller.getProduct);
router.post("/addproducts", controller.addProduct);
router.post("/updateproducts", controller.updateProducts);

module.exports = router;
