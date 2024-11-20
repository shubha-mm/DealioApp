import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { environment } from '../../environments/environment';
import { RazorpayOptions, PaymentResponse, OrderRequest } from '../models/payment';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  private loading: HTMLIonLoadingElement | null = null;
  amount = 1000; // Default amount in paise (₹10)

  constructor(
    private paymentService: PaymentService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.loadRazorpayScript();
  }

  private loadRazorpayScript(): void {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }

  private async showLoading(message: string): Promise<void> {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'circular',
      translucent: true
    });
    await this.loading.present();
  }

  private async hideLoading(): Promise<void> {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }

  private async showToast(message: string, color: 'success' | 'danger' = 'success'): Promise<void> {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
      buttons: [{ text: 'OK', role: 'cancel' }]
    });
    await toast.present();
  }

  private async showError(message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async initiatePayment(): Promise<void> {
    try {
      await this.showLoading('Creating payment order...');

      const orderRequest: OrderRequest = {
        amount: this.amount,
        currency: 'INR'
      };

      const order = await this.paymentService.createOrder(orderRequest).toPromise();
      await this.hideLoading();

      const options: RazorpayOptions = {
        key: environment.razorpayKey,
        amount: order.amount.toString(),
        currency: order.currency,
        name: 'Your Company Name',
        description: 'Payment for services',
        order_id: order.id,
        handler: (response: PaymentResponse) => this.verifyPayment(response),
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '1234567890'
        },
        theme: {
          color: '#F37254'
        }
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch (error) {
      await this.hideLoading();
      this.showError('Failed to initiate payment. Please try again.');
    }
  }

  private async verifyPayment(response: PaymentResponse): Promise<void> {
    try {
      await this.showLoading('Verifying payment...');
      const verificationResponse = await this.paymentService.verifyPayment(response).toPromise();
      await this.hideLoading();

      if (verificationResponse.success) {
        this.showToast('Payment successful!', 'success');
      } else {
        this.showError('Payment verification failed. Please contact support.');
      }
    } catch (error) {
      await this.hideLoading();
      this.showError('An error occurred while verifying the payment.');
    }
  }
}
