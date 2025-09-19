const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificateSchema = new Schema({
    certificateId: {
        type: Number,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    certificateHash: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Certificate', CertificateSchema);