import React, { useState } from 'react';
import { post } from '../lib/api';

// --- SVG Icons ---
const CheckIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ClipboardIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const UniversityDashboard = () => {
    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [certificateId, setCertificateId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setCertificateId(null);
        setIsCopied(false);

        try {
            // NOTE: 'certificateData' was being sent but not used in the backend. 
            // It's good practice to only send the data that is required.
            const response = await post('/api/university/upload', {
                studentName,
                studentID: studentId,
                courseName,
            });
            setCertificateId(response.data.certificateId);
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Failed to issue certificate. Please check the server connection and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (certificateId) {
            navigator.clipboard.writeText(certificateId);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

                <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold tracking-tighter">University Dashboard</h2>
                        <p className="text-slate-400 mt-2">Issue a new secure certificate on the blockchain.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input Fields */}
                        <div>
                            <label htmlFor="studentName" className="block text-sm font-medium text-slate-300">Student Name</label>
                            <input
                                id="studentName" type="text" value={studentName}
                                onChange={(e) => setStudentName(e.target.value)} required
                                className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="studentId" className="block text-sm font-medium text-slate-300">Student ID</label>
                            <input
                                id="studentId" type="text" value={studentId}
                                onChange={(e) => setStudentId(e.target.value)} required
                                className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="courseName" className="block text-sm font-medium text-slate-300">Course Name</label>
                            <input
                                id="courseName" type="text" value={courseName}
                                onChange={(e) => setCourseName(e.target.value)} required
                                className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Issuing Certificate...
                                </>
                            ) : (
                                'Issue Certificate'
                            )}
                        </button>
                    </form>

                    {/* --- Result Display --- */}
                    {error && <p className="mt-4 text-center text-sm text-red-400">{error}</p>}
                    
                    {certificateId && (
                        <div className="mt-8 border-t border-slate-700 pt-6 text-center">
                            <h3 className="text-lg font-bold text-green-400">Certificate Issued Successfully!</h3>
                            <p className="text-slate-400 text-sm mt-1">Share this ID with the student.</p>
                            <div className="mt-4 flex items-center justify-center bg-slate-900/70 border border-slate-700 rounded-lg p-3">
                                <p className="text-lg font-mono text-cyan-300 flex-grow text-left pl-2">{certificateId}</p>
                                <button onClick={handleCopy} className="p-2 rounded-md hover:bg-slate-700 transition">
                                    {isCopied ? <CheckIcon className="h-6 w-6 text-green-400" /> : <ClipboardIcon className="h-6 w-6 text-slate-400" />}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UniversityDashboard;
