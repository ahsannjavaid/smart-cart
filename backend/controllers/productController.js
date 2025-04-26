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
      if (item.availableQty > 0) {
        data[item.title].color = [item.color]
        data[item.title].size = [item.size]
      }
    }
  }
  res.status(200).json({ data });
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