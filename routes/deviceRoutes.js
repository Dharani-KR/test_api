// routes/devices.js
const express = require('express');
const router = express.Router();
const Device = require('../models/deviceModel');

// CREATE - Add a new device
router.post('/createDevice', async (req, res) => {
  try {
    const newDevice = new Device(req.body);
    const savedDevice = await newDevice.save();
    res.status(201).json(savedDevice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all device
router.get('/getAllDevice', async (req, res) => {
  try {
    const Devices = await Device.find();
    res.json(Devices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ - Get an product by ID
// router.get('/getProductById/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// READ - Get an device by ID
router.get('/getDeviceById', async (req, res) => {
  try {
    const device = await Device.findById(req.query.id);
    if (!device) return res.status(404).json({ message: 'device not found' });
    res.json(device);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE - Update an device by ID
router.put('/updateDeviceById', async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedDevice) return res.status(404).json({ message: 'Device not found' });
    res.json(updatedDevice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove an device by ID
router.delete('/deleteDeviceById', async (req, res) => {
  try {
    const device = await Device.findByIdAndDelete(req.query.id);
    if (!device) return res.status(404).json({ message: 'Device not found' });
    res.json({ message: 'Device deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
