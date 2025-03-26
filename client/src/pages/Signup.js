import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ username: 'johnDoe', email: 'john@example.com', password: 'password123' });
    const [errors, setErrors] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        const { username, email, password } = formData;
        let isValid = true;
        let usernameError = '';
        let emailError = '';
        let passwordError = '';

        if (!username.trim()) {
            usernameError = 'Username is required.';
            isValid = false;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.match(emailPattern)) {
            emailError = 'Please enter a valid email address.';
            isValid = false;
        }
        if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters long.';
            isValid = false;
        }
        setErrors({ username: usernameError, email: emailError, password: passwordError });
        return isValid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const res = await axios.post('http://localhost:5001/api/auth/signup', formData);
            setMessage(res.data.msg || 'Signup successful, please login.');
            // Optionally, you can redirect to the login page here
            // navigate('/login');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Signup failed');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: '"Montserrat", sans-serif' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Signup</h2>
                {message && <div style={{ marginBottom: '15px', color: 'green', textAlign: 'center' }}>{message}</div>}
                <form onSubmit={onSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={onChange}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            required
                        />
                        {errors.username && <div style={{ color: 'red', marginTop: '5px' }}>{errors.username}</div>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={onChange}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            required
                        />
                        {errors.email && <div style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={onChange}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            required
                        />
                        {errors.password && <div style={{ color: 'red', marginTop: '5px' }}>{errors.password}</div>}
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '2px solid black',
                            borderRadius: '25px',
                            backgroundColor: 'black',
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
