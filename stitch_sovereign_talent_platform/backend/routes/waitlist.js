const express = require('express');
const router = express.Router();
const WaitlistUser = require('../models/WaitlistUser');

// POST /api/waitlist
// Register a user for the waitlist
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    // Check if user already exists
    const existingUser = await WaitlistUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email is already registered on the waitlist.' });
    }

    // Create new waitlist user
    const newUser = new WaitlistUser({
      name,
      email,
      phone,
      role
    });

    await newUser.save();

    res.status(201).json({ success: true, message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error('Waitlist Registration Error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
});

module.exports = router;
