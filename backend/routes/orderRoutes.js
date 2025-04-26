const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderController");

router.get("/allorders", controller.getAllOrders);
router.post("/initiateorder", controller.initiateOrder);

module.exports = router;
