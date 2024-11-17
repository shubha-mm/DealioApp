import { Component } from '@angular/core';
declare var Razorpay: any;

@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.page.html',
  styleUrls: ['./razorpay-payment.page.scss'],
})
export class RazorpayPaymentPage {
  paymentAmount: number = 500; // Amount in INR
  currency: string = 'INR';
  description: string = 'Payment for Order #12345';
  razorpayKey: string = 'rzp_live_NnJbR7ipdHTQ7N'; // Replace with your Razorpay Key

  constructor() {}

  payWithRazorpay() {
    const options = {
      key: this.razorpayKey,
      amount: this.paymentAmount * 100, // Convert to paisa
      currency: this.currency,
      name: 'Your App Name',
      description: this.description,
      image: 'https://your-logo-url.com/logo.png', // Optional logo URL
      handler: (response: any) => {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        // Save response to backend or handle payment confirmation here
      },
      prefill: {
        name: 'John Doe', // Prefilled user name
        email: 'john.doe@example.com', // Prefilled email
        contact: '9876543210', // Prefilled contact
      },
      theme: {
        color: '#3399cc', // Custom theme color
      },
    };

    // Use the globally available Razorpay object
    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();

    razorpayInstance.on('payment.failed', (response: any) => {
      alert('Payment Failed! Error: ' + response.error.description);
      // Handle payment failure
    });
  }
}
