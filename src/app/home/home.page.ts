import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDarkMode: boolean = false;
  cartCount: number = 0; // Track the cart count dynamically

  products = [
    { name: 'Smart Watch', price: 45, image: 'https://m.media-amazon.com/images/I/712wglSBTaL._AC_SX679_.jpg' },
    { name: 'Headphones', price: 30, image: 'https://m.media-amazon.com/images/I/7185qYEwIEL._AC_SX466_.jpg' },
    { name: 'Sneakers', price: 55, image: 'https://m.media-amazon.com/images/I/51-YHhOquuL._AC_SY695_.jpg' },
    { name: 'Laptop Stand', price: 25, image: 'https://m.media-amazon.com/images/I/51KyaTB1EKL.__AC_SX300_SY300_QL70_FMwebp_.jpg' },
    { name: 'Phone Cover', price: 10, image: 'https://m.media-amazon.com/images/I/71j9N0Zr6vL._AC_SX679_.jpg' },
    { name: 'Backpack', price: 40, image: 'https://m.media-amazon.com/images/I/71yC7W6uEbL._AC_SX679_.jpg' },
  ];

  winterProducts = [
    { name: 'Regular Fit Felted overshirt', price: 1499, image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F84%2F2f%2F842fec1dafc56687d34cc4cb60a858ec2b5410af.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' },
    { name: 'Regular Fit Zip-top sweatshirt', price: 299, image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9f%2F56%2F9f56eadbe5a40e6a8e14cb3edbbd5addf860cef7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' },
    { name: 'Hoodie', price: 499, image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fff%2Fdbffa3571b9d73c6762519abda9ce3a75a30be0c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' },
    { name: 'Winter Gloves', price: 199, image: 'https://sp.yimg.com/ib/th?id=OPAC.5Ui%2f3lsZSYIMGw474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Beanie Hat', price: 249, image: 'https://sp.yimg.com/ib/th?id=OPAC.4ZHH1KDUooGBaA474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Sweater', price: 899, image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F30%2F3b%2F303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]' },
  ];

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private platform: Platform,
    private cartService: CartService
  ) {
    this.platform.ready().then(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      } else {
        this.isDarkMode = false;
        document.body.classList.add('light-mode');
      }
    });
  }

  ngOnInit() {
   // Update cart count on initialization
  }

  addToCart(product: any) {
    if (product) {
      this.cartService.addToCart(product);
      // Update cart count after adding an item
    } else {
      console.error('Product is not defined or invalid');
    }
  }

 

  // Navigate to Cart Page
  navigateToCart() {
    this.navCtrl.navigateForward('/tabs/cart');
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    console.log('User logged out');
    this.navCtrl.navigateRoot('/login');
  }
}
