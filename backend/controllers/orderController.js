const Order = require("../models/Order");
const pincodes = require('../../pincodes.json');
const Product = require("../models/Product");
const jsonwebtoken = require("jsonwebtoken");

exports.getAllOrders = async (req, res) => {
  let orders = await Order.find()
  res.status(200).json({ orders });
}

exports.initiateOrder = async (req, res) => {
  if (!Object.keys(pincodes).includes(req.body.pincode)) {
    res.status(200).json({ success: false, "error": "The pincode you entered is not serviceable", cartClear: false })
    return
  }

  //Check cart is tempered
  let cart = req.body.cart;
  let product, sumTotal = 0;
  if (req.body.subTotal <= 0) {
    res.status(200).json({ success: false, "error": "Your cart is empty. Please build your cart and Try Again", cartClear: false })
    return
  }
  for (let item in cart) {
    sumTotal += cart[item].price * cart[item].qty
    product = await Product.findOne({ slug: item })
    if (!product) {
      res.status(404).json({ success: false, "error": "Product not found!", cartClear: true })
      return
    }
    if (product.availableQty < cart[item].qty) {
      res.status(200).json({ success: false, "error": "Some items in your cart went out of stock. Please Try Again!", cartClear: true })
      return
    }
    if (product.price != cart[item].price) {
      res.status(200).json({ success: false, "error": "The price of some items in your cart has changed. Please try again", cartClear: true })
      return
    }
  }

  if (sumTotal != req.body.subTotal) {
    res.status(200).json({ success: false, "error": "The price of some items in your cart has changed. Please try again", cartClear: true })
    return
  }

  if (req.body.phone.length !== 11) {
    res.status(200).json({ success: false, "error": "Please enter your 11 digit phone number", cartClear: false })
    return
  }
  if (!Number.isInteger(Number(req.body.phone))) {
    res.status(200).json({ success: false, "error": "Please enter digits as your phone number", cartClear: false })
    return
  }

  let order = new Order({
    email: req.body.email,
    orderId: req.body.oid,
    address: req.body.address,
    city: req.body.city,
    name: req.body.name,
    state: req.body.state,
    pincode: req.body.pincode,
    phone: req.body.phone,
    amount: req.body.subTotal,
    products: req.body.cart
  })
  await order.save()
  let products = cart
  for (let slug in products) {
    await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": -products[slug].qty } })
  }
  res.status(200).json({ success: true, orderId: order._id })
}

exports.getMyOrder = async (req, res) => {
  const token = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ success: false, error: "Unauthorized user!" });
  }
  
  try {
    const { id } = req.params;
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const order = await Order.findById(id);
    if (order) res.status(200).json({ order });
    else res.status(404).json({ success: false, error: "Order not found!" });
  } catch (error) {
    res.status(403).json({ success: false, error: "Invalid or expired token" });
  }
};

exports.getMyOrders = async (req, res) => {
  const token = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ success: false, error: "Unauthorized user!" });
  }
  
  try {
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const orders = await Order.find({ email: data.email });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(403).json({ success: false, error: "Invalid or expired token" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { orderId, field, newStatus } = req.body;

    let updateData = {};
    if (field === "status") {
      updateData = { status: newStatus };
    } else if (field === "deliveryStatus") {
      updateData = { deliveryStatus: newStatus };
    } else {
      console.log("Invalid field specified:", field);
      return res.status(400).json({ success: false, message: "Invalid field specified" });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: orderId },
      updateData,
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error); // Log the error for debugging
    res.status(500).json({ success: false, error: error.message });
  }
};