import React, { useState } from 'react';
import ChatBox from './ChatBox';

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleChatBox}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    border: 'none',
                    padding: '18px',
                    fontSize: '24px',
                    cursor: 'pointer',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    zIndex: 1000,
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                💬
            </button>
            {isOpen && <ChatBox onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default ChatButton;
