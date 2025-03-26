const express = require('express');
const router = express.Router();
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

// DELETE /api/cart/remove
// Removes a product from the user's cart
router.delete('/remove', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            cart.products = cart.products.filter(p => p.toString() !== productId);
            await cart.save();
            res.json({ message: 'Product removed from cart', cart });
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
