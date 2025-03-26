import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc'
    };

    const leftStyle = { display: 'flex', gap: '15px', alignItems: 'center' };
    const centerStyle = { display: 'flex', gap: '20px' };

    return (
        <nav style={navStyle}>
            <div style={leftStyle}>
                {/* Wishlist heart button and Add to cart */}
                <button>♥</button>
                <button>Cart</button>
            </div>
            <div style={centerStyle}>
                <img src="/nike-logo.png" alt="Nike Logo" style={{ height: '40px' }} />
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
                <Link to="/jordans">Jordans</Link>
                <Link to="/sport">Sport</Link>
                <Link to="/new">NEW</Link>
            </div>
            <div>
                {/* Login and Signup buttons */}
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
