const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  let orders = await Order.find()
  res.status(200).json({ orders });
}
