const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// GET /api/categories/men
router.get('/men', async (req, res) => {
    try {
        const categories = await Category.find({ gender: 'men' }).populate('products');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/categories/women
router.get('/women', async (req, res) => {
    try {
        const categories = await Category.find({ gender: 'women' }).populate('products');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
