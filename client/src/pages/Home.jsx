import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Blockchain Certificate Verification System</h1>
            <p>Verify or issue certificates with confidence.</p>
            <div style={{ marginTop: '30px' }}>
                <Link to="/university" style={{ marginRight: '20px', padding: '10px 20px', border: '1px solid black', borderRadius: '5px' }}>University Login</Link>
                <Link to="/verify" style={{ padding: '10px 20px', border: '1px solid black', borderRadius: '5px' }}>Verify Certificate</Link>
            </div>
        </div>
    );
}

export default Home