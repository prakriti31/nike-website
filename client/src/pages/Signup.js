import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ username:'', email: '', password: '' });
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Signup</h2>
            <form onSubmit={onSubmit}>
                <input name="username" type="text" placeholder="Username" onChange={onChange} required /><br /><br />
                <input name="email" type="email" placeholder="Email" onChange={onChange} required /><br /><br />
                <input name="password" type="password" placeholder="Password" onChange={onChange} required /><br /><br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
