const Product = require("../models/Product");

exports.myProducts = async (req, res) => {
  let products = await Product.find()
  res.status(200).json({ products });
}

exports.getProducts = async (req, res) => {
  let products = await Product.find()
  let tshirts = {}
  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
    }
  }
  res.status(200).json({ tshirts });
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
