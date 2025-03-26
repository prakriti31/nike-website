import React from 'react';

const Banner = () => {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
                src="/banner.jpg"
                alt="Banner"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
        </div>
    );
};

export default Banner;
