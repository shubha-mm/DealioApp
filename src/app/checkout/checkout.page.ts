import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RazorpayService } from '../services/razorpay.service';


declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: any[] = [];
  totalAmount = 0;

  constructor(private razorpayService: RazorpayService) {}

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

    const razorpayKey = this.razorpayService.getKey();

    try {
      const order: any = await this.razorpayService
        .createOrder(this.totalAmount)
        .toPromise();

      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: 'Dealio Shopping',
        description: 'Order Payment',
        order_id: order.id,
        handler: (response: any) => {
          console.log('Payment successful:', response);
          alert('Payment successful!');
          this.completeOrder();
        },
        prefill: {
          name: 'Saksham Shakya',
          email: 'sakshamshakya337@gmail.com',
          contact: '9411850565',
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

  completeOrder() {
    console.log('Order completed successfully.');
    this.cartItems = [];
    localStorage.removeItem('cart');
    alert('Order completed successfully.');
  }
}
