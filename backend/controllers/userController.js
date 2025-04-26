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

exports.signup = async (req, res) => {
  const { name, email } = req.body
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: "This user already exists!" });
  }
  let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString() })
  u.save()
  res.status(200).json({ success: "Success" })
}

exports.updatePassword = async (req, res) => {
  let token = req.body.token
  let user = jwt.verify(token, process.env.JWT_SECRET)
  let dbuser = await User.findOne({ email: user.email })
  const bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET);
  let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
  if (decryptedPass == req.body.password && req.body.npassword == req.body.cpassword) {
    let dbuser = await User.findOneAndUpdate({ email: user.email }, { password: CryptoJS.AES.encrypt(req.body.cpassword, process.env.AES_SECRET).toString() })

    res.status(200).json({ success: true });
  }
  res.status(200).json({ success: false });
}

exports.updateUser = async (req, res) => {
  let token = req.body.token
  let user = jwt.verify(token, process.env.JWT_SECRET)
  let dbuser = await User.findOneAndUpdate({ email: user.email }, { address: req.body.address, pincode: req.body.pincode, phone: req.body.phone, name: req.body.name })

  res.status(200).json({ success: true });
}