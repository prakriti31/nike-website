const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/Category');
const Cart = require('../models/Cart');
const Wishlist = require('../models/Wishlist');

// Get products by gender and category
router.get('/category/:gender', async (req, res) => {
    try {
        const categories = await Category.find({ gender: req.params.gender }).populate('products');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product to cart
router.post('/add-to-cart', async (req, res) => {
    const { productId, userId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }

        const product = await Product.findById(productId);
        cart.products.push(product);
        await cart.save();

        res.status(200).json({ message: 'Product added to cart', cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product to wishlist
router.post('/add-to-wishlist', async (req, res) => {
    const { productId, userId } = req.body;
    try {
        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            wishlist = new Wishlist({ userId, products: [] });
        }

        const product = await Product.findById(productId);
        wishlist.products.push(product);
        await wishlist.save();

        res.status(200).json({ message: 'Product added to wishlist', wishlist });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get wishlist
router.get('/wishlist/:userId', async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: req.params.userId }).populate('products');
        res.json(wishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get cart
router.get('/cart/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('products');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/products
// Fetch products filtered by the category type (i.e. category name) and optional limit.
router.get('/', async (req, res) => {
    const { type, limit } = req.query;  // 'type' corresponds to the category name (e.g., "Sneakers")
    const query = {};
    if (type) {
        query.type = type;
    }
    try {
        let productsQuery = Product.find(query);
        if (limit) {
            productsQuery = productsQuery.limit(parseInt(limit, 10));
        }
        const products = await productsQuery;
        console.log("RISHABH", products);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add to Product model (server/models/Product.js)
// const productSchema = new Schema({
//     name: String,
//     description: String,
//     category: String,
//     embedding: {
//         type: [Number],
//         index: 'vector',
//         dimensions: 1536
//     }
// });


module.exports = router;
