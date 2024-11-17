import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    // Load cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  getCartItems() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.saveCart();
  }

  updateQuantity(item: any, quantity: number) {
    const cartItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.saveCart();
    }
  }

  removeItem(item: any) {
    // Filter out the item from the cart
    this.cart = this.cart.filter(cartItem => cartItem.name !== item.name);
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
