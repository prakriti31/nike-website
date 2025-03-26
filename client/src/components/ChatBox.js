import React, { useState, useRef, useEffect } from 'react';

const ChatBox = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: inputText, sender: 'user' }];
        setMessages(newMessages);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            setMessages([
                ...newMessages,
                { text: "Thanks for your message! Our team will get back to you soon.", sender: 'bot' }
            ]);
        }, 1000);
    };

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            backgroundColor: '#f5f5f5',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: 'white',
                padding: '12px 20px',
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        backgroundColor: '#000000',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px',
                        fontSize: '18px',
                    }}>
                        <span>💬</span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>
                        AI ChatBot
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: '#000000',
                    }}
                >
                    —
                </button>
            </div>

            {/* Messages area */}
            <div style={{
                padding: '15px',
                overflowY: 'auto',
                flex: 1,
                backgroundColor: '#f9f9f9',
            }}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            marginBottom: '15px',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                        }}>
                            {message.sender === 'bot' && (
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#000000',
                                    marginRight: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    fontSize: '16px',
                                }}>
                                    <span>🤖</span>
                                </div>
                            )}

                            <div style={{
                                backgroundColor: message.sender === 'user' ? '#000000' : '#000000',
                                color: '#ffffff',
                                padding: '10px 15px',
                                borderRadius: '18px',
                                maxWidth: '70%',
                                wordBreak: 'break-word',
                                marginLeft: message.sender === 'bot' ? '0' : '8px',
                                marginRight: message.sender === 'user' ? '0' : '8px',
                            }}>
                                {message.text}
                            </div>

                            {message.sender === 'user' && (
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    marginLeft: '8px',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src="https://i.pravatar.cc/100"
                                        alt="User"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                        </div>

                        {message.sender === 'bot' && (
                            <div style={{
                                marginLeft: '44px',
                                marginTop: '5px',
                                fontSize: '12px',
                                color: '#666',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <span style={{
                                    color: '#4169E1',
                                    marginRight: '5px',
                                    fontSize: '14px'
                                }}>✨</span>
                                Answered by AI
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: '15px',
                    backgroundColor: 'white',
                    borderTop: '1px solid #e0e0e0',
                    display: 'flex',
                }}
            >
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    style={{
                        flex: 1,
                        padding: '12px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '20px',
                        fontSize: '14px',
                        outline: 'none',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#000000',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        marginLeft: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    ➤
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
