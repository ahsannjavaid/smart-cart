const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/getuser", controller.getUser);
router.post("/login", controller.login);
router.post("/signup", controller.signup);
router.post("/updatepassword", controller.updatePassword);
router.post("/updateuser", controller.updateUser);

module.exports = router;
