const express = require('express');
const router = express.Router();
const { addCertificate } = require('../utils/blockchain'); // Blockchain function import karein
const Certificate = require('../models/Certificate'); // Abhi aage banayenge

// @route POST /api/university/upload
// @desc University uploads certificate details
router.post('/upload', async (req, res) => {
    try {
        // Step 1: Frontend se student details aur file aayengi
        const { studentName, studentID, courseName, certificateData } = req.body;

        // --- Update kiya hua Duplicate Check ---
        const existingCertificate = await Certificate.findOne({ studentID, courseName });
        if (existingCertificate) {
            return res.status(409).json({ message: "Certificate for this student and course already exists. Cannot issue a duplicate." });
        }

        // Step 2: Hashing (Ek dummy hash banate hain abhi ke liye)
        const certificateHash = '0x' + require('crypto').createHash('sha256').update(JSON.stringify(req.body)).digest('hex');

        // Step 3: Blockchain par hash store karein aur ID payein
        const certificateId = await addCertificate(certificateHash);

        // Step 4: MongoDB mein record save karein
        const newCertificate = new Certificate({
            certificateId,
            studentName,
            studentID,
            courseName, // Nayi field yahan add karein
            certificateHash,
        });
        await newCertificate.save();

        res.status(200).json({
            message: "Certificate uploaded successfully",
            certificateId: certificateId.toString()
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;