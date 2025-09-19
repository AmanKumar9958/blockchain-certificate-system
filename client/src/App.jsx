import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityLogin from './pages/UniversityLogin';
import VerifyCertificate from './pages/VerifyCertificate';
import UniversityDashboard from './pages/UniversityDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/university" element={<UniversityLogin />} />
                    <Route path="/verify" element={<VerifyCertificate />} />
                    <Route path="/university-dashboard" element={<UniversityDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;