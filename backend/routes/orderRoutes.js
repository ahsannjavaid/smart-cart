const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderController");

router.get("/allorders", controller.getAllOrders);

module.exports = router;
