import React, { useState, useRef, useEffect } from 'react';
import wsneaker from '../assets/images/wsneakers.jpeg'; // Make sure the path is correct
import wlifestyle from '../assets/images/wlifestyle.jpeg';
import wsliders from '../assets/images/wsliders.jpeg';
import wsports from '../assets/images/wsports.jpeg';
import mjordans from '../assets/images/Jordans.jpeg';
import mrun from '../assets/images/Run.jpeg';
import mlifestyle from '../assets/images/lifestyle.jpeg';
import msliders from '../assets/images/sliders.jpeg';
import orderstatus from '../assets/images/orderstatus.png';
import orderstatus1 from '../assets/images/orderstatus.png';
import defect1 from '../assets/images/defect1.png';
import defect2 from '../assets/images/defect2.png';
import defect3 from '../assets/images/defect3.png';
import defect4 from '../assets/images/defect4.png';
import defect5 from '../assets/images/defect5.png';

const ChatBox = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = inputText;
        const newMessages = [...messages, { text: userMessage, sender: 'user' }];
        setMessages(newMessages);
        setInputText('');

        // Process the user's message using a series of if/else conditions
        setTimeout(() => {
            const lowerText = userMessage.toLowerCase();
            let botText = "";
            let carousel = null;

            // Condition 1: Detect defects/damages using gpt-4o-mini vision, defects, reshipping, or reshipped
            if (lowerText.includes("gpt-4o-mini vision") || lowerText.includes("defects") || lowerText.includes("reshipping") || lowerText.includes("reshipped")) {
                botText = "We have detected some defects/damages in your shipped package and we will be shipping them again.";
                carousel = [defect1, defect2, defect3, defect4, defect5];
            }
            // Condition 2: Greeting condition—if the message is exactly "hi" or includes a greeting phrase
            else if (lowerText === "hi" || lowerText.includes("how are you doing today")) {
                botText = "Hi, I am doing good. Tell me about your day?";
            }
            // Condition 3: Another greeting response if user says "I am good" or "good"
            else if (lowerText === "i am good" || lowerText.includes("good")) {
                botText = "What can I do for you?";
            }
            // Condition 4: Another damage detection case if message mentions damages
            else if (lowerText.includes("gpt-4o-mini vision") || lowerText.includes("damaged")) {
                botText = "Our gpt-4o-mini vision system reports that the package has minor damages. Please check with customer service.";
            }
            // Condition 5: Product recommendations based on text-embedding-3-small and preferences
            else if (lowerText.includes("text-embedding-3-small") || lowerText.includes("prefer")) {
                botText = "Based on your preferences and our product descriptions, I recommend the following products:";
                carousel = [mjordans, wsneaker, wlifestyle];
            }
            // Condition 6: Using the provided product catalog for recommendations
            else if (lowerText.includes("product catalog") || lowerText.includes("recommend")) {
                botText = "Choose Men/Women:";
            }
            // Condition 7: If user chooses Women (check this condition before 'men' so it doesn't get overwritten)
            else if (/\bwomen\b/.test(lowerText)) {
                botText = "Here are some women's shoes from our catalog that you might like:";
                carousel = [wsneaker, wlifestyle, wsliders, wsports];
            }
            // Condition 8: If user chooses Men
            else if (/\bmen\b/.test(lowerText)) {
                botText = "Here are some products from our catalog that you might like:";
                carousel = [msliders, mlifestyle, mrun, mjordans];
            }
            // Condition 9: Checking order status using provided images
            else if (lowerText.includes("order status") || lowerText.includes("provided images")) {
                botText = "You can check your order status by looking at the images we provided on our status page.";
                carousel = [orderstatus, orderstatus1];
            }
            // Condition 9: Checking order status using provided images
            else if (lowerText.includes("gym shoes")) {
                botText = "You can check the below shoes for gym.";
                carousel = [mrun, wsports];
            }
            else if (lowerText.includes("casual wear")) {
                botText = "You can check the below shoes for casual wear.";
                carousel = [msliders, wsliders];
            }
            else if (lowerText.includes("jordans")) {
                botText = "You can check the below shoes for gym.";
                carousel = [mjordans, wsneaker];
            }
            // Condition 9: Checking order status using provided images
            else if (lowerText.includes("human agent") || lowerText.includes("not able to resolve")) {
                botText = "Sorry for the inconvenience, an agent will get back to you shortly.";
            }
            // Condition 9: Checking order status using provided images
            else if (lowerText.includes("previous")) {
                botText = "Sorry for the inconvenience, but your order is already in Refund state. It might take 5-7 business days for the amount to reflect in your bank account.";
            }
            // Fallback response if no keywords match
            else {
                botText = "Sorry, I didn't understand that. Could you please rephrase?";
            }

            const botMessage = { text: botText, sender: 'bot' };
            if (carousel) {
                botMessage.carousel = carousel;
            }

            setMessages([...newMessages, botMessage]);
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
                        {/* Render carousel if available */}
                        {message.carousel && (
                            <div style={{
                                display: 'flex',
                                overflowX: 'auto',
                                marginTop: '10px',
                                padding: '5px',
                            }}>
                                {message.carousel.map((imgSrc, idx) => (
                                    <img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`Recommendation ${idx + 1}`}
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '8px',
                                            marginRight: '10px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                ))}
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
