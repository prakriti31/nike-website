import express from 'express';
import {
    getRecommendations,
    checkOrderStatus
} from '../services/aiService.js';

const router = express.Router();

router.post('/process', async (req, res) => {
    const { message, orderImages } = req.body;

    // Order status check
    if (message.includes('order status')) {
        const orderNumber = message.match(/\d+/)[0];
        const status = await checkOrderStatus(orderNumber, orderImages[orderNumber]);
        return res.json({ reply: `Order ${orderNumber} status: ${status}` });
    }

    // Product recommendation
    const products = await getRecommendations(message);
    const reply = `Recommended products: \n${products.map(p => p.name).join('\n')}`;

    res.json({ reply });
});

export default router;
