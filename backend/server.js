const express = require('express');
const Razorpay = require('razorpay');
const app = express();

app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_live_NnJbR7ipdHTQ7N', // Replace with your Razorpay key ID
  key_secret: 'HkxljT05kbTqxzCD6xmTwRK1', // Replace with your Razorpay secret
});

app.post('/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `receipt_${Date.now()}`,
    });
    res.json(order);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create order.' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000.'));
