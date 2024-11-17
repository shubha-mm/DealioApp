import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any; // Declare Razorpay to be used globally after script is loaded

interface RazorpayOrder {
  id: string; 
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: any[] = [];
  totalAmount = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCart();
    this.calculateTotal();
  }

  /**
   * Load cart items from local storage.
   */
  loadCart() {
    try {
      this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      this.cartItems = [];
    }
  }

  /**
   * Calculate total amount for items in the cart.
   */
  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  /**
   * Dynamically load the Razorpay script if not already loaded.
   */
  loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if Razorpay script is already loaded
      if (typeof Razorpay === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(); // Resolve promise once script is loaded
        script.onerror = () => reject('Razorpay SDK failed to load');
        document.body.appendChild(script);
      } else {
        resolve(); // Razorpay is already loaded
      }
    });
  }

  /**
   * Initiate the Razorpay payment process.
   */
  async makePayment() {
    if (this.totalAmount <= 0) {
      alert('Your cart is empty. Add items to proceed.');
      return;
    }

    try {
      // Load the Razorpay script dynamically
      await this.loadRazorpayScript();
      console.log('Razorpay script loaded successfully.');

      // Create Razorpay order from backend
      const order = await this.http
        .post<RazorpayOrder>('http://localhost:3000/create-order', {
          amount: this.totalAmount * 100, // Convert to paise
          currency: 'INR',
        })
        .toPromise();

      if (!order || !order.id) {
        throw new Error('Invalid Razorpay order response');
      }

      console.log('Razorpay order created successfully:', order);

      // Razorpay payment options
      const options = {
        key: 'rzp_live_NnJbR7ipdHTQ7N', // Replace with your Razorpay Key ID
        amount: order.amount, // Amount from backend
        currency: order.currency, // Currency from backend
        name: 'Your App Name', // Replace with your app's name
        description: 'Order Payment',
        order_id: order.id, // Order ID from backend
        handler: (response: any) => {
          console.log('Payment successful with response:', response);
          this.completeOrder(response);
        },
        prefill: {
          name: 'Customer Name', // Replace with dynamic customer name
          email: 'customer@example.com', // Replace with dynamic customer email
          contact: '9999999999', // Replace with dynamic customer contact
        },
        theme: {
          color: '#3399cc', // Customize payment theme color
        },
        modal: {
          ondismiss: () => {
            console.warn('Payment popup closed by user');
            alert('Payment was not completed. Please try again.');
          },
        },
      };

      // Open Razorpay payment popup
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error during payment process:', error);
      alert('Payment failed. Please check your internet connection or contact support.');
    }
  }

  /**
   * Handle order completion after successful payment.
   */
  completeOrder(paymentResponse: any) {
    console.log('Payment Response:', paymentResponse);

    // Clear the cart
    this.cartItems = [];
    localStorage.removeItem('cart');

    alert('Thank you for your payment! Your order has been placed successfully.');
    console.log('Cart cleared and order completed.');
  }
}
