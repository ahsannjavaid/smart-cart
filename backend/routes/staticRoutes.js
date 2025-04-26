const express = require("express");
const router = express.Router();
const controller = require("../controllers/staticController");

router.get("/colors", controller.colors);

module.exports = router;
