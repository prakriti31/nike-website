import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = ({ user, onLogout }) => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ccc',
        backgroundColor: 'white',
        fontFamily: '"Montserrat", sans-serif',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const centerStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    };

    const rightStyle = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    };

    const linkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
        fontFamily: '"Montserrat", sans-serif',
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
        <nav style={navStyle}>
            <div style={logoStyle}>
                <img src={logo} alt="Nike Logo" style={{ height: '40px' }} />
            </div>
            <div style={centerStyle}>
                <Link to="/men" style={linkStyle}>Men</Link>
                <Link to="/women" style={linkStyle}>Women</Link>
                <Link to="/kids" style={linkStyle}>Kids</Link>
                <Link to="/jordans" style={linkStyle}>Jordans</Link>
                <Link to="/sport" style={linkStyle}>Sport</Link>
                <Link to="/orders" style={linkStyle}>Orders</Link>
            </div>
            <div style={rightStyle}>
                <Link to="/wishlist">
                    <FaHeart size={20} style={{ color: 'black' }} />
                </Link>
                {/* Ensure that the Link is pointing to the correct cart page route */}
                <Link to="/bag">
                    <FaShoppingBag size={20} style={{ color: 'black' }} />
                </Link>
                {user ? (
                    <>
                        <span style={{ fontWeight: 'bold' }}>Hello, {user.email}</span>
                        <button onClick={onLogout} style={buttonStyle}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button style={buttonStyle}>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button style={buttonStyle}>Signup</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
