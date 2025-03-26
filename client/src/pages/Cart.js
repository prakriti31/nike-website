import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch cart data from backend
        axios.get(`/api/products/cart/${userId}`)
            .then(response => {
                setCart(response.data.products);
            })
            .catch(err => console.error(err));
    }, [userId]);

    return (
        <div>
            <h2>Your Cart</h2>
            <div>
                {cart.length > 0 ? (
                    cart.map(product => (
                        <div key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
