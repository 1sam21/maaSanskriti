require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn("WARNING: MONGODB_URI is not defined in the environment variables. The database will not connect.");
} else {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB successfully.'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
}

// Routes
const waitlistRoutes = require('./routes/waitlist');
app.use('/api/waitlist', waitlistRoutes);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MaaSanskriti Backend API is running.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server starting on http://localhost:${PORT}`);
});
