import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #ccc' }}>
            © {new Date().getFullYear()} Nike. All rights reserved.
        </footer>
    );
};

export default Footer;
