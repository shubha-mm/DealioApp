import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RazorpayService {
  private backendUrl = 'http://localhost:3000'; // Your backend server URL

  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    const orderData = { amount: amount * 100, currency: 'INR' }; // Amount in smallest currency unit
    return this.http.post(`${this.backendUrl}/create-order`, orderData);
  }

  getKey() {
    return environment.razorpayKey;
  }
}
