const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const staticRoutes = require("./routes/staticRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/", productRoutes);
app.use("/", orderRoutes);
app.use("/", userRoutes);
app.use("/", staticRoutes);
app.use("/", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
