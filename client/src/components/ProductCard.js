import React from 'react';
import axios from 'axios';

const ProductCard = ({ product, userId }) => {
    const addToCart = () => {
        axios.post('/api/products/add-to-cart', { productId: product._id, userId })
            .then(response => alert('Product added to cart'))
            .catch(err => console.error(err));
    };

    const addToWishlist = () => {
        axios.post('/api/products/add-to-wishlist', { productId: product._id, userId })
            .then(response => alert('Product added to wishlist'))
            .catch(err => console.error(err));
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={addToWishlist}>Add to Wishlist</button>
        </div>
    );
};

export default ProductCard;
