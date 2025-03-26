import React from 'react';

const MidSection = () => {
    const containerStyle = {
        background: 'white',          // Set background to white
        color: 'black',               // Set text color to black
        textAlign: 'center',          // Center-align the text
        padding: '40px 20px',         // Add padding for spacing
        fontFamily: '"Montserrat", sans-serif', // Apply Montserrat font
    };

    const boldTextStyle = {
        fontWeight: 'bold',           // Make the text bold
        marginBottom: '10px',
        fontSize: '20px',
    };

    // Button Style for normal state and hover state
    const buttonStyle = {
        border: '2px solid black',
        borderRadius: '25px',
        padding: '8px 20px',
        fontFamily: '"Montserrat", sans-serif',
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
        transition: 'all 0.3s ease', // Smooth transition on hover
    };

    return (
        <div style={containerStyle}>
            {/* Bold text for Mallory Swanson */}
            <div style={boldTextStyle}>Mallory Swanson</div>

            {/* EYES ON THE PRIZE text, bold and large font */}
            <div style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '10px' }}>
                EYES ON THE PRIZE
            </div>

            {/* Additional text with margin at the bottom */}
            <div style={{ marginBottom: '40px' }}>
                Mallory Swanson always gets her goals.
            </div>

            {/* Shop button */}
            <button style={buttonStyle}>Shop</button>
        </div>
    );
};

export default MidSection;
