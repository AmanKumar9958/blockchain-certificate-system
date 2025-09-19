const express = require('express');
const router = express.Router();
const { getCertificateHash } = require('../utils/blockchain'); // Blockchain function import karein
const Certificate = require('../models/Certificate'); // Database model

// @route POST /api/verify
// @desc Verify a certificate using its ID
router.post('/', async (req, res) => {
    try {
        const { certificateId } = req.body;

        // Step 1: Database se record search karein
        const certificateRecord = await Certificate.findOne({ certificateId });

        if (!certificateRecord) {
            return res.status(404).json({ message: "Certificate not found." });
        }

        // Step 2: Blockchain se original hash nikalen
        const blockchainHash = await getCertificateHash(parseInt(certificateId));

        // Step 3: Hashing aur Comparison
        // Yahan aap live certificate file ka hash banayenge, jo abhi dummy hai.
        const providedHash = certificateRecord.certificateHash; // Assuming we have it stored

        if (blockchainHash === providedHash) {
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
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;