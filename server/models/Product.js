// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String },  // Path to the image
    gender: { type: String, enum: ['men', 'women'], required: true }
});

module.exports = mongoose.model('Product', productSchema);
