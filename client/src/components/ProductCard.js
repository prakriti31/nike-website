import React from 'react';
import axios from 'axios';

const ProductCard = ({ product, userId }) => {
    const addToCart = () => {
        axios.post('http://localhost:5001/api/cart/add', { productId: product._id, userId })
            .then(response => alert('Product added to cart'))
            .catch(err => console.error(err));
    };

    const addToWishlist = () => {
        // Wishlist functionality assumed to be similar; placeholder here
        axios.post('http://localhost:5001/api/products/add-to-wishlist', { productId: product._id, userId })
            .then(response => alert('Product added to wishlist'))
            .catch(err => console.error(err));
    };

    return (
        <div className="product-card" style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={addToWishlist}>Add to Wishlist</button>
        </div>
    );
};

export default ProductCard;
