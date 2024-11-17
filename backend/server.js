const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config(); // Load environment variables

// Validate environment variables
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('Missing Razorpay credentials in .env file');
  process.exit(1); // Exit the server if credentials are missing
}

const app = express();

// Middleware
app.use(cors({ origin: true })); // Customize CORS as needed
app.use(express.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Endpoint to create an order
app.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount specified' });
    }

    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `receipt_order_${Date.now()}`,
    };

    console.log('Creating Razorpay order with options:', options);

    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Error creating Razorpay order:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to verify payment (optional for client-side payments)
app.post('/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment details for verification' });
    }

    const hash = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (hash === razorpay_signature) {
      console.log('Payment verified successfully:', razorpay_payment_id);
      res.status(200).json({ success: true, message: 'Payment Verified' });
    } else {
      console.warn('Payment verification failed:', razorpay_payment_id);
      res.status(400).json({ success: false, error: 'Payment Verification Failed' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Razorpay Payment API is running' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
