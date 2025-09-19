import React, { useState } from 'react';
import axios from 'axios';

const VerifyCertificate = () => {
    const [certificateId, setCertificateId] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/verify', { certificateId });
            setVerificationResult(res.data);
        } catch (error) {
            console.error("Verification failed:", error);
            setVerificationResult({ message: "An error occurred during verification." });
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Verify Certificate</h2>
            <form onSubmit={handleVerify}>
                <input
                    type="text"
                    placeholder="Enter Certificate ID or Scan QR"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    required
                />
                <button type="submit">Verify</button>
            </form>
            {verificationResult && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Result:</h3>
                    <p style={{ color: verificationResult.verified ? 'green' : 'red' }}>
                        {verificationResult.message}
                    </p>
                </div>
            )}
        </div>
    );
};

export default VerifyCertificate;