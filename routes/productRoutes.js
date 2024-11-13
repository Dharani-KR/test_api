// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// CREATE - Add a new product
router.post('/createProduct', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all products
router.get('/getAllProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
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

// READ - Get an product by ID
router.get('/getProductById', async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE - Update an product by ID
router.put('/updateProductById', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove an product by ID
router.delete('/deleteProductById', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
