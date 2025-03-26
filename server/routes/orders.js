const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Your Order model
const jwt = require('jsonwebtoken'); // For token authentication

// GET /api/orders/history
// Fetches the order history for the logged-in user
router.get('/api/orders/history', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header
    console.log('Token:', token); // Debugging log

    if (!token) {
        return res.status(403).send('Access denied, no token provided.');
    }

    try {
        // Verify the token and extract the userId
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your secret key
        const userId = decoded.userId; // Assuming your token contains the userId

        // Fetch the order history from the database
        const orders = await Order.find({ userId }).populate('products').exec(); // Assuming 'products' is populated

        if (!orders || orders.length === 0) {
            return res.status(404).send('No orders found for this user');
        }

        res.json(orders); // Return the orders as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to authenticate token or retrieve orders');
    }
});

module.exports = router;
