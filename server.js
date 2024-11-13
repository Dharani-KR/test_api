// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productRoutes');
const deviceRoutes = require('./routes/deviceRoutes');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/express-crud';

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/devices' , deviceRoutes) ;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
