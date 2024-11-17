import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var Razorpay: any;

interface RazorpayOrder {
  id: string; // Order ID
  amount: number; // Amount in paise
  currency: string; // Currency type, e.g., "INR"
  receipt: string; // Receipt identifier
  status: string; // Status of the order, e.g., "created"
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
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  async makePayment() {
    try {
      console.log('Initiating payment with total amount:', this.totalAmount);

      // Call the backend to create a Razorpay order
      const order = await this.http
        .post<RazorpayOrder>('http://localhost:3000/create-order', {
          amount: this.totalAmount * 100, // Convert to paise
          currency: 'INR',
        })
        .toPromise();

      // Ensure order is valid
      if (!order || !order.id) {
        throw new Error('Invalid Razorpay order response');
      }

      console.log('Razorpay order created successfully:', order);

      // Razorpay payment options
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        amount: order.amount, // Amount from backend
        currency: order.currency, // Currency from backend
        name: 'Your App Name',
        description: 'Order Payment',
        order_id: order.id, // Order ID from backend
        handler: (response: any) => {
          console.log('Payment successful with response:', response);
          this.completeOrder();
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
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

  completeOrder() {
    alert('Thank you for your payment! Your order has been placed successfully.');
    this.cartItems = [];
    localStorage.removeItem('cart'); // Clear the cart
    console.log('Cart cleared and order completed');
  }
}
