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

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  async makePayment() {
    if (this.totalAmount === 0) {
      alert('Cart is empty. Add items to proceed.');
      return;
    }

    await this.loadRazorpayScript();

    try {
      // Create an order using your backend API
      const order = await this.http
        .post<any>('http://localhost:3000/create-order', {
          amount: this.totalAmount * 100,
          currency: 'INR',
        })
        .toPromise();

      const options = {
        key: 'rzp_live_NnJbR7ipdHTQ7N', // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: 'Your App Name',
        description: 'Order Payment',
        order_id: order.id,
        handler: (response: any) => {
          this.completeOrder(response);
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: () => alert('Payment cancelled.'),
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment failed. Try again later.');
    }
  }

  loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof Razorpay === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(); // Wrap resolve to handle the event
        script.onerror = () => reject(new Error('Razorpay SDK failed to load'));
        document.body.appendChild(script);
      } else {
        resolve(); // Razorpay is already loaded
      }
    });
  }


  completeOrder(response: any) {
    console.log('Payment successful:', response);
    this.cartItems = [];
    localStorage.removeItem('cart');
    alert('Order completed successfully.');
  }
}
