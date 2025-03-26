import React from 'react';

const BoxSection = () => {
    const boxStyle = {
        width: '45%',
        height: '200px',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '10px',
        boxSizing: 'border-box',
        margin: '10px'
    };
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    const boxes = [1, 2, 3, 4];
    return (
        <div style={containerStyle}>
            {boxes.map((box, index) => (
                <div key={index} style={boxStyle}>
                    <div>
                        <div style={{ fontSize: '14px' }}>Line 1</div>
                        <div style={{ fontSize: '14px' }}>Line 2</div>
                    </div>
                    <button style={{ marginTop: '10px' }}>SHOP</button>
                </div>
            ))}
        </div>
    );
};

export default BoxSection;
