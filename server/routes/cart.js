const express = require('express');
const router = express.Router();


// POST /api/cart/add
// Adds a product to the user's cart. If the cart does not exist, create it.
router.post('/api/cart/remove', async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            return res.status(404).send('Cart not found');
        }

        // Remove product from cart
        cart.products = cart.products.filter(product => !product.equals(productId));
        await cart.save();

        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


// GET /api/cart/:userId
const Cart = require('../models/Cart'); // Your Cart model

router.get('/api/cart', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header
    console.log('Token:', token); // Debugging log

    if (!token) {
        return res.status(403).send('Access denied, no token provided.');
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your secret key
        const userId = decoded.userId; // Assuming your token contains the userId

        const cart = await Cart.findOne({ userId }).populate('products');
        if (!cart) {
            return res.status(404).send('Cart not found');
        }
        res.json(cart);
    } catch (err) {
        res.status(500).send('Failed to authenticate token');
    }
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
