const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

exports.getUser = async (req, res) => {
  let token = req.body.token
  let user = jwt.verify(token, process.env.JWT_SECRET)
  let dbuser = await User.findOne({ email: user.email })

  const { name, email, address, pincode, phone } = dbuser
  res.status(200).json({ name, email, address, pincode, phone });
}

exports.login = async (req, res) => {
  let u = await User.findOne({ "email": req.body.email });
  if (u) {
    const bytes = CryptoJS.AES.decrypt(u.password, process.env.AES_SECRET);
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if (req.body.email == u.email && req.body.password == decryptedPass) {
      var token = jwt.sign({ email: u.email, name: u.name }, process.env.JWT_SECRET, {
        expiresIn: "2d"
      });
      res.status(200).json({ success: true, token, email: u.email });
    }
    else {
      res.status(200).json({ success: false, error: "Invalid Credentials" });
    }
  }
  else {
    res.status(200).json({ success: false, error: "User Not Found" });
  }
};