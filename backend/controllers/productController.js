const Product = require("../models/Product");

exports.getProducts = async(req, res) => {
  let products=await Product.find()
  res.status(200).json({products});
}

exports.addProduct =async(req,res)=>{
  let p =new Product({
    title: req.body.title ,
    slug: req.body.slug ,
    desc: req.body.desc ,
    img: req.body.image ,
    category: req.body.category  ,
    size: req.body.size ,
    color: req.body.color ,
    price: req.body.price ,
    availableQty: req.body.quantity ,
    })
  await p.save()

  res.status(200).json({ success: true});
}
