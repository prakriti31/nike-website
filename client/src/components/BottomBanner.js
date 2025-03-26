import React from 'react';
import banner from '../assets/images/bottombanner.jpeg'; // Make sure the path is correct

const BottomBanner = () => {
    return (
        <div style={{width: '100%', overflow: 'hidden'}}>
            <img
                src={banner}
                alt="Banner"
                style={{width: '100%', height: '600px', objectFit: 'cover'}}
            />
        </div>
    );
};

export default BottomBanner;
