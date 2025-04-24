const Product = require("../models/Product");

// exports.getAllItems = async (req, res) => {
  //   const items = await Item.find();
  //   res.json(items);
  // };
// GET /items
exports.getAllProducts = async(req, res) => {
  let products=await Product.find()
  res.status(200).json({products});
}

// GET /items/:id
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// POST /items
exports.createItem = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const newItem = new Item({ name, quantity });
    await newItem.save(); // Mongoose will throw validation errors if any
    res.status(201).json(newItem); // Send back the newly created item
  } catch (err) {
    // If validation fails, this will catch the error and send it as a response
    res.status(400).json({ error: err.message }); // Send validation error details
  }
};

// PUT /items/:id
exports.updateItem = async (req, res) => {
    const { name, quantity } = req.body;
    
    try {
      // Find the item by ID and update it
      const item = await Item.findByIdAndUpdate(
        req.params.id,
        { name, quantity },
        { new: true, runValidators: true } // runValidators: true ensures Mongoose applies the schema validation
      );
  
      // If the item wasn't found, return a 404 error
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      // Successfully updated item
      res.json(item);
    } catch (err) {
      // If validation fails, Mongoose will throw an error, which we catch here
      // Mongoose validation error message is in err.message
      res.status(400).json({ error: err.message });
    }
  };

// DELETE /items/:id
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
};
