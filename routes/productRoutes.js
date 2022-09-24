const express = require("express");
const router = express.Router();

//הגדרת מקור למשתנים
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadsController");

// הגדרת מסלולים
router
  .route("/")
  .post(createProduct)
  .get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
