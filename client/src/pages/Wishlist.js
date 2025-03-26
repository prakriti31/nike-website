import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = ({ userId }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch wishlist data from backend
        axios.get(`/api/products/wishlist/${userId}`)
            .then(response => {
                setWishlist(response.data.products);
            })
            .catch(err => console.error(err));
    }, [userId]);

    return (
        <div>
            <h2>Your Wishlist</h2>
            <div>
                {wishlist.length > 0 ? (
                    wishlist.map(product => (
                        <div key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
