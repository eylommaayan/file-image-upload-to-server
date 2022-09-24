const mongoose = require("mongoose"); // קריאה ל

//אלו הערכים שיהיוצריך להיות מוזנים schema יצירת
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
