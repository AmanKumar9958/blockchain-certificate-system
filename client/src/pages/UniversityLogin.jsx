import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UniversityLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // A simple check for now. In a real app, this would be a secure API call.
        if (password === 'uni-password') {
            navigate('/university-dashboard');
        } else {
            alert('Invalid password');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>University Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UniversityLogin;