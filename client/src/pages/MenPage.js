import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const MenPage = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [userId, setUserId] = useState('some-user-id'); // Replace with actual user ID logic

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/categories/men');
                setCategories(res.data);
                if (res.data.length > 0) {
                    setSelectedCategoryId(res.data[0]._id);
                }
            } catch (err) {
                setError('Failed to load categories');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (selectedCategoryId) {
                try {
                    const res = await axios.get(
                        `http://localhost:5001/api/products?category=${selectedCategoryId}&limit=6`
                    );
                    setProducts(res.data);
                } catch (err) {
                    setError('Failed to load products');
                    console.error(err);
                }
            }
        };
        fetchProducts();
    }, [selectedCategoryId]);

    const addToCart = async (productId) => {
        if (!userId) {
            alert('Please log in to add items to your cart.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5001/api/cart/add', {
                userId: userId,
                productId: productId,
            });
            console.log(response.data);
            alert('Product added to cart');
        } catch (err) {
            console.error(err);
            alert('Failed to add product to cart');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ width: '20%', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <h2>Categories</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {categories.map(category => (
                        <li
                            key={category._id}
                            onClick={() => handleCategoryClick(category._id)}
                            style={{
                                marginBottom: '10px',
                                cursor: 'pointer',
                                fontWeight: selectedCategoryId === category._id ? 'bold' : 'normal'
                            }}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ width: '80%', paddingLeft: '20px' }}>
                <h1>Men's Products</h1>
                <div
                    className="product-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridGap: '20px'
                    }}
                >
                    {products.length > 0 ? (
                        products.map(product => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                userId={userId} // Pass userId here
                                addToCart={addToCart} // Pass addToCart function here
                            />
                        ))
                    ) : (
                        <p>No products available for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenPage;
