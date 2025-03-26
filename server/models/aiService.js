import OpenAI from 'openai';
import { Product } from './Product.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const getRecommendations = async (query) => {
    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: query,
    });

    const products = await Product.aggregate([{
        $vectorSearch: {
            queryVector: embedding.data[0].embedding,
            path: "embedding",
            numCandidates: 100,
            limit: 5,
            index: "productSemanticSearch"
        }
    }]);

    return products;
};

export const checkOrderStatus = async (orderNumber, imageUrl) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{
            role: "user",
            content: [
                { type: "text", text: "Analyze this product image for defects:" },
                { type: "image_url", image_url: { url: imageUrl } }
            ]
        }]
    });

    const analysis = response.choices[0].message.content;
    if (analysis.includes('defect')) return 'Replace/Refund';
    if (analysis.includes('damage')) return 'Replace/Refund';
    return 'Escalate to Human';
};
