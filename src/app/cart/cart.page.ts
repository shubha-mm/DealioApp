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
      
      this.removeItem(item);
    }

   
    this.calculateTotalPrice();
  }


  removeItem(item: any) {
    
    this.cartService.removeItem(item);

    
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);

    
    this.calculateTotalPrice();
  }

 
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

 
  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}