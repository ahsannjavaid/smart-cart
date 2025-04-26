const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.post("/adminlogin", controller.login);

module.exports = router;
