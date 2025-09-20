import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UniversityLogin from './pages/UniversityLogin';
import VerifyCertificate from './pages/VerifyCertificate';
import UniversityDashboard from './pages/UniversityDashboard';
import AppLayout from './components/AppLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/university" element={<UniversityLogin />} />
                    <Route path="/verify" element={<VerifyCertificate />} />
                    <Route path="/university-dashboard" element={<UniversityDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;