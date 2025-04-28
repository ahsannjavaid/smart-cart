const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderController");

router.get("/allorders", controller.getAllOrders);
router.post("/initiateorder", controller.initiateOrder);
router.post("/updateorder", controller.updateOrder);
router.get("/myorders", controller.getMyOrders);
router.get("/myorder/:id", controller.getMyOrder);

module.exports = router;
