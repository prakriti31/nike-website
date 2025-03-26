import React from 'react';
import image1 from '../assets/images/image1.jpeg'; // Make sure the path is correct
import image2 from '../assets/images/image2.jpeg'; // Make sure the path is correct
import image3 from '../assets/images/image3.jpeg'; // Make sure the path is correct
import image4 from '../assets/images/image4.jpeg'; // Make sure the path is correct

const BoxSection = () => {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '0',
        width: '100vw',
        height: '100vw',
        maxHeight: '100vh',
        overflow: 'hidden',
        fontFamily: '"Montserrat", sans-serif', // Apply Montserrat font to the entire container
    };

    const boxStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const contentStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        right: '10px',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
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

    const buttonHoverStyle = {
        backgroundColor: 'black',
        color: 'white',
    };

    const boxes = [
        { image: image1, line1: 'Coming soon', line2: 'Luka 1' },
        { image: image2, line1: 'Style By Gabi Ruffels', line2: 'Subtlety\'s Not in the Lineup' },
        { image: image3, line1: 'Style By College Hoop\'s Best', line2: 'Dylan Harper\'s Winning Formula' },
        { image: image4, line1: 'Max Cushioning for the Ultimate Ride', line2: 'Vamero 18' }
    ];

    return (
        <div style={containerStyle}>
            {boxes.map((box, index) => (
                <div key={index} style={boxStyle}>
                    <img src={box.image} alt={`Box ${index + 1}`} style={imageStyle} />
                    <div style={contentStyle}>
                        <div style={{ fontSize: '20px' }}>{box.line1}</div>
                        <div style={{ fontSize: '30px' }}>{box.line2}</div>
                        <button
                            style={buttonStyle}
                            onMouseEnter={(e) => e.target.style = { ...buttonStyle, ...buttonHoverStyle }}
                            onMouseLeave={(e) => e.target.style = buttonStyle}>
                            SHOP
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BoxSection;
