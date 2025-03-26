const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// GET /api/categories/men
router.get('/men', async (req, res) => {
    try {
        // Find categories where gender is 'Men'
        const categories = await Category.find({ gender: 'Men' });
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/categories/women
router.get('/women', async (req, res) => {
    try {
        // Find categories where gender is 'women'
        const categories = await Category.find({ gender: 'women' });
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const Cart = require('../models/Cart');

// POST /api/cart/add
// Adds a product to the user's cart. If the cart does not exist, create it.
router.post('/add', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }
        // Optionally: prevent duplicate product entries
        if (!cart.products.includes(productId)) {
            cart.products.push(productId);
        }
        await cart.save();
        res.json({ message: 'Product added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /api/cart/:userId
router.get('/api/cart/:userId', (req, res) => {
    Cart.findOne({ userId: req.params.userId })
        .populate('products') // Populating product details
        .then(cart => {
            res.json(cart);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error fetching cart', error: err });
        });
});


module.exports = router;

module.exports = router;
