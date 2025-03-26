// server/models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ['men', 'women'], required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]  // Array of product references
});

module.exports = mongoose.model('Category', categorySchema);
