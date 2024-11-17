const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your Razorpay Key ID and Key Secret
const razorpay = new Razorpay({
  key_id: 'rzp_live_NnJbR7ipdHTQ7N', // Replace with actual Key ID
  key_secret: 'HkxljT05kbTqxzCD6xmTwRK1', // Replace with actual Key Secret
});

// Route to create a Razorpay order
app.post('/create-order', async (req, res) => {
  try {
    // Log incoming request payload
    console.log('Incoming request to /create-order:', req.body);

    const { amount, currency } = req.body;

    // Log the options being sent to Razorpay
    const options = {
      amount: amount, // Amount in paise
      currency: currency, // Currency
      receipt: `receipt_order_${Date.now()}`, // Unique receipt ID
    };
    console.log('Creating Razorpay order with options:', options);

    // Create order with Razorpay
    const order = await razorpay.orders.create(options);

    // Log the response from Razorpay
    console.log('Razorpay order created successfully:', order);

    res.status(200).json(order); // Send order details back to the frontend
  } catch (error) {
    // Log error details for debugging
    console.error('Error creating Razorpay order:', {
      message: error.message,
      stack: error.stack,
      data: error,
    });

    // Send error response to the client
    res.status(500).json({
      message: 'Error creating Razorpay order',
      error: error.message,
    });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
