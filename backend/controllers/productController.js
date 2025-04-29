const Product = require("../models/Product");

exports.myProducts = async (req, res) => {
  let products = await Product.find()
  res.status(200).json({ products });
}

exports.getProducts = async (req, res) => {
  const { category } = req.query;
  let products = await Product.find({ category })
  let data = {}
  for (let item of products) {
    if (item.title in data) {
      if (!data[item.title].color.includes(item.color) && item.availableQty > 0) {
        data[item.title].color.push(item.color)
      }
      if (!data[item.title].size.includes(item.size) && item.availableQty > 0) {
        data[item.title].size.push(item.size)
      }
    }
    else {
      data[item.title] = JSON.parse(JSON.stringify(item))
      data[item.title].color = item.availableQty > 0 ? [item.color] : [];
      data[item.title].size = item.availableQty > 0 ? [item.size] : [];
    }
  }
  res.status(200).json({ data });
}

exports.getProduct = async (req, res) => {
  const { slug } = req.params;
  let product = await Product.findOne({ slug })
  if (product) {
    let variants = await Product.find({ title: product?.title });
    let colorSizeSlug = {};

    for (let item of variants) {
      if (!colorSizeSlug[item.color]) {
        colorSizeSlug[item.color] = {};
      }
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
    res.status(200).json({ product, variants: colorSizeSlug });
  } else {
    res.status(200).json({ success: false, message: "Product not found!" });
  }
}

exports.addProduct = async (req, res) => {
  let p = new Product({
    title: req.body.title,
    slug: req.body.slug,
    desc: req.body.desc,
    img: req.body.image,
    category: req.body.category,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    availableQty: req.body.quantity,
  })
  await p.save()

  res.status(200).json({ success: true });
}

exports.updateProducts = async (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
  }
  res.status(200).json({ success: "Success" });
}