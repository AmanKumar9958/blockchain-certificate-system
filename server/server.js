// server.js
// 1. Saare zaroori modules import karein
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const crypto = require('crypto'); // Hashing ke liye

// blockchain aur database models
const { addCertificate, getCertificateHash } = require('./utils/blockchain');
const Certificate = require('./models/Certificate');

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware setup karein (sabse pehle)
app.use(cors());
app.use(express.json());

// 3. Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

// 4. Routes define karein (middleware ke baad)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// --- UNIVERSITY ROUTE (Upload) ---
app.post('/api/university/upload', async (req, res) => {
    try {
        // Sirf core data ko body se lein
        const { studentName, studentID, courseName } = req.body;

        const existingCertificate = await Certificate.findOne({ studentID, courseName });
        if (existingCertificate) {
            return res.status(409).json({ message: "Certificate for this student and course already exists. Cannot issue a duplicate." });
        }
        
        // Final hashing: sirf core data ka hash banayein
        const certificateDataToHash = {
            studentName,
            studentID,
            courseName,
        };

        const certificateHash = '0x' + crypto.createHash('sha256').update(JSON.stringify(certificateDataToHash)).digest('hex');
        
        const certificateId = await addCertificate(certificateHash);

        const newCertificate = new Certificate({
            certificateId: certificateId.toString(),
            studentName,
            studentID,
            courseName,
            certificateHash,
        });
        await newCertificate.save();

        res.status(200).json({
            message: "Certificate uploaded successfully",
            certificateId: certificateId.toString()
        });

    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// --- VERIFICATION ROUTE ---
app.post('/api/verify', async (req, res) => {
    try {
        const { certificateId } = req.body;

        const certificateRecord = await Certificate.findOne({ certificateId });

        if (!certificateRecord) {
            return res.status(404).json({ message: "Certificate not found." });
        }
        
        const blockchainHashRaw = await getCertificateHash(parseInt(certificateId));
        const providedHashRaw = certificateRecord.certificateHash;

        const blockchainHash = '0x' + blockchainHashRaw.substring(2).padStart(64, '0');
        const providedHash = '0x' + providedHashRaw.substring(2).padStart(64, '0');

        if (blockchainHash.trim().toLowerCase() === providedHash.trim().toLowerCase()) {
            res.status(200).json({
                message: "Certificate is authentic.",
                verified: true
            });
        } else {
            res.status(200).json({
                message: "Certificate is not authentic.",
                verified: false
            });
        }

    } catch (error) {
        console.error("Verification error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// 5. Server start karein (sabse aakhir mein)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});