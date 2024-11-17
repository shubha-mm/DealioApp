import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];

  // Variable to track the total price of the cart
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Retrieve cart items when the component initializes
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice(); // Recalculate the total price
  }

  // Update the quantity of an item
  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      // Update quantity in CartService
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
      return total + (item.price * item.quantity);
    }, 0);
  }
}
