import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

// --- SVG Icons ---
const DocumentSearchIcon = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> );
const CheckCircleIcon = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const XCircleIcon = ({ className }) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );

const VerifyCertificate = () => {
    const [certificateId, setCertificateId] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();

    const verifyById = async (id) => {
        if (!id) return;
        setLoading(true);
        setVerificationResult(null);
        try {
            const res = await axios.post('http://localhost:5000/api/verify', { certificateId: id });
            setVerificationResult(res.data);
        } catch (error) {
            console.error("Verification failed:", error);
            if (error.response && error.response.data && error.response.data.message) {
                 setVerificationResult({ verified: false, message: error.response.data.message });
            } else {
                setVerificationResult({ verified: false, message: "Verification failed. Check ID or server." });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const idFromUrl = searchParams.get('certificateId');
        if (idFromUrl) {
            setCertificateId(idFromUrl);
            verifyById(idFromUrl);
        }
    }, [searchParams]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        verifyById(certificateId);
    };

    const getResultUI = () => {
        if (loading) return ( <div className="flex flex-col items-center text-slate-400"><svg className="animate-spin h-8 w-8 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><p className="mt-2">Verifying on Blockchain...</p></div> );
        if (!verificationResult) return ( <div className="text-center text-slate-400"><DocumentSearchIcon className="h-16 w-16 mx-auto mb-4 text-slate-500" /><h3 className="text-lg font-semibold">Ready to Verify</h3><p className="text-sm">Enter a Certificate ID to check its authenticity.</p></div> );
        if (verificationResult.verified) return ( <div className="text-center text-green-400"><CheckCircleIcon className="h-16 w-16 mx-auto mb-4" /><h3 className="text-lg font-semibold">Verification Successful</h3><p className="text-sm text-slate-300">{verificationResult.message}</p></div> );
        else return ( <div className="text-center text-red-400"><XCircleIcon className="h-16 w-16 mx-auto mb-4" /><h3 className="text-lg font-semibold">Verification Failed</h3><p className="text-sm text-slate-300">{verificationResult.message}</p></div> );
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
            <div className="relative w-full max-w-md">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold tracking-tighter">Verify Certificate</h2>
                        <p className="text-slate-400 mt-2">Check the authenticity of a certificate instantly.</p>
                    </div>
                    <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input type="text" placeholder="Enter Certificate ID..." value={certificateId} onChange={(e) => setCertificateId(e.target.value)} required className="flex-grow w-full bg-slate-700/50 border border-slate-600 rounded-full shadow-sm py-2 px-5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                        <button type="submit" disabled={loading} className="flex-shrink-0 w-full sm:w-auto flex justify-center items-center py-2.5 px-6 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105">
                            {loading ? ( <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ) : 'Verify'}
                        </button>
                    </form>
                    <div className="mt-8 border-t border-slate-700/50 pt-6 min-h-[150px] flex items-center justify-center">
                        {getResultUI()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyCertificate;