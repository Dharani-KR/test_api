// models/ProducModel.js
const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  modelNo : { type: String, required: true },
  description: { type: String },
  
});

module.exports = mongoose.model('Device', DeviceSchema);
