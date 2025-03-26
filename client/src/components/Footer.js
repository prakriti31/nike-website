import React from 'react';
import logo from '../assets/images/logo.png'; // Make sure the path is correct

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px 0' }}>
            {/* Nike Logo */}
            <img
                src={logo}
                alt="Nike Logo"
                style={{ width: '50px', height: 'auto', objectFit: 'contain', marginBottom: '10px' }}
            />
            <div>© {new Date().getFullYear()} Nike. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
