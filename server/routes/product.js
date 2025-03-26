const express = require('express');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Wishlist = require('../models/Wishlist');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all products (optionally by category)
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const query = category ? { category } : {};
        const products = await Product.find(query);
        res.json(products);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add product to cart
router.post('/cart', authMiddleware, async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            cart = new Cart({ userId: req.user.id, products: [] });
        }
        // Check if product already in cart
        const index = cart.products.findIndex(p => p.productId.toString() === productId);
        if(index > -1) {
            cart.products[index].quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add product to wishlist
router.post('/wishlist', authMiddleware, async (req, res) => {
    const { productId } = req.body;
    try {
        let wishlist = await Wishlist.findOne({ userId: req.user.id });
        if (!wishlist) {
            wishlist = new Wishlist({ userId: req.user.id, products: [] });
        }
        // Avoid duplicates
        if(!wishlist.products.includes(productId)) {
            wishlist.products.push(productId);
        }
        await wishlist.save();
        res.json(wishlist);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
