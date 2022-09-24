const Product = require("../models/Product"); // קיראה ל
const { StatusCodes } = require("http-status-codes"); // קריאה לסיפרייה

//פונקציה ליצירת מוצר
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = {
  createProduct,
  getAllProducts,
};
