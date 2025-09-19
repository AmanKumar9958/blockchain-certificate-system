import React, { useState } from 'react';
import axios from 'axios';

const UniversityDashboard = () => {
    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [certificateId, setCertificateId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Dhyan dein: Yahan hum ek dummy certificate data bhej rahe hain.
            // Real project mein, aap ek file upload system banayenge.
            const certificateData = `Certificate for ${studentName} - ID: ${studentId}`;

            const response = await axios.post('http://localhost:5000/api/university/upload', {
                studentName,
                studentID: studentId, // Backend ke field name se match karein
                certificateData,
            });

            setCertificateId(response.data.certificateId);
            alert(`Certificate uploaded successfully! ID: ${response.data.certificateId}`);
        } catch (err) {
            console.error(err);
            setError('Failed to upload certificate. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>University Dashboard</h2>
            <p>Fill in the details to issue a new certificate.</p>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Student ID:</label>
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Certificate'}
                </button>
            </form>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

            {certificateId && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Certificate Issued!</h3>
                    <p>
                        **Certificate ID:** {certificateId}
                        <br />
                        This ID and its corresponding QR code can now be shared with the student.
                    </p>
                </div>
            )}
        </div>
    );
};

export default UniversityDashboard;