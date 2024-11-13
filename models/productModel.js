// models/ProducModel.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Product', ProductSchema);
