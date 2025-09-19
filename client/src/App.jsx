import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityLogin from './pages/UniversityLogin';
import VerifyCertificate from './pages/VerifyCertificate';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/university" element={<UniversityLogin />} />
                    <Route path="/verify" element={<VerifyCertificate />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;