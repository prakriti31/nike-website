import React from 'react';

const MidSection = () => {
    const containerStyle = {
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px'
    };
    return (
        <div style={containerStyle}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Mallory Swanson</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>EYES ON THE PRIZE</div>
            <div style={{ marginBottom: '20px' }}>Mallory Swanson always gets her goals.</div>
            <button style={{ padding: '10px 20px' }}>Shop</button>
        </div>
    );
};

export default MidSection;
