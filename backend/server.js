const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:8100', // Frontend origin
  methods: ['GET', 'POST'], // Allowed methods
}));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

const razorpay = new Razorpay({
  key_id: 'rzp_live_NnJbR7ipdHTQ7N',
  key_secret: 'HkxljT05kbTqxzCD6xmTwRK1',
});

app.post('/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: 'Amount and currency are required' });
    }

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order.' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
