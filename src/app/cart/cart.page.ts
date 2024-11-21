import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  updateQuantity(item: any, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(item, quantity);
    } else {
      this.confirmRemoveItem(item);
    }
    this.loadCart();
  }

  async confirmRemoveItem(item: any) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Remove',
      message: `Are you sure you want to remove "${item.name}" from the cart?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.removeItem(item);
          },
        },
      ],
    });
    await alert.present();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  // Confirm the order before proceeding to checkout
  async confirmOrder() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Order',
      message: `Your total is ₹${this.totalPrice.toFixed(
        2
      )}. Do you want to place your order?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.proceedToCheckout();
          },
        },
      ],
    });
    await alert.present();
  }

  proceedToCheckout() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      this.showEmptyCartAlert();
    }
  }

  async showEmptyCartAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cart is Empty',
      message: 'Your cart is empty! Add items before proceeding to checkout.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goShopping() {
    this.router.navigate(['/tabs/explore']);
  }
  goBack() {
    this.navCtrl.navigateBack('/tabs/explore');

  }
}
