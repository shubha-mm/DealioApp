import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0; 

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

 
  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
    
      this.cartService.updateQuantity(item, quantity);
    } else {
      // Remove item if the quantity is set to zero
      this.removeItem(item);
    }

    // Recalculate the total price after updating the cart
    this.calculateTotalPrice();
  }

  // Remove item from cart
  removeItem(item: any) {
    // Remove item from CartService
    this.cartService.removeItem(item);

    // Directly update the cartItems array to reflect the removal
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);

    // Recalculate the total price after removing the item
    this.calculateTotalPrice();
  }

  // Calculate the total price of items in the cart
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  // Navigate to the checkout page
  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}