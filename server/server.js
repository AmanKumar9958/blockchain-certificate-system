require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const universityRoutes = require('./routes/university');
const verificationRoutes = require('./routes/verification');

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

// Routes (Abhi ke liye blank, aage banayenge)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/university', universityRoutes);
app.use('/api/verify', verificationRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});