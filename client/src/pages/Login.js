import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({ email: 'john@example.com', password: 'password123' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        const { email, password } = formData;
        let isValid = true;
        let emailError = '';
        let passwordError = '';

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.match(emailPattern)) {
            emailError = 'Please enter a valid email address.';
            isValid = false;
        }
        if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters long.';
            isValid = false;
        }
        setErrors({ email: emailError, password: passwordError });
        return isValid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const res = await axios.post('http://localhost:5001/api/auth/login', formData, { withCredentials: true });
            if (res.data && res.data.user) {
                setUser(res.data.user);
                navigate('/');
            }
        } catch (err) {
            console.error('Login Error:', err);
            alert(err.response?.data?.msg || 'Connection failed. Check server status.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: '"Montserrat", sans-serif' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <form onSubmit={onSubmit}>
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
