import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/cart/${userId}`)
            .then(response => {
                setCart(response.data);
            })
            .catch(err => console.error(err));
    }, [userId]);

    const removeFromCart = (productId) => {
        axios.delete('http://localhost:5001/api/cart/remove', { data: { userId, productId } })
            .then(response => {
                setCart(response.data.cart);  // Make sure to update the cart
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cart && cart.products && cart.products.length > 0 ? (
                cart.products.map(product => (
                    <div key={product._id}>
                        {/* Assuming your backend now sends product details like name, description, price, imageUrl */}
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => removeFromCart(product._id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
