import React from 'react';

const ProductCard = ({ product, userId, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product._id);
    };

    const addToWishlist = () => {
        alert('Product added to wishlist');
    };

    const buttonStyle = {
        border: '2px solid black',
        borderRadius: '25px',
        padding: '8px 20px',
        fontFamily: '"Montserrat", sans-serif',
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    return (
        <div className="product-card" style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart} style={buttonStyle}>Add to Cart</button>
            <button onClick={addToWishlist} style={buttonStyle}>Add to Wishlist</button>
        </div>
    );
};

export default ProductCard;
