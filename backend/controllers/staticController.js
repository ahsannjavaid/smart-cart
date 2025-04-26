const Order = require("../models/Order");
const pincodes = require('../../pincodes.json');
const Product = require("../models/Product");
const jsonwebtoken = require("jsonwebtoken");

exports.colors = async (req, res) => {
  const { size } = req.query;

  if (!size) {
    return res.status(400).json({ error: 'Size is required' });
  }

  try {
    const colors = await Product.distinct('color', { size: size });
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
}

exports.pincodes = async (req, res) => {
  res.status(200).json(pincodes);
}