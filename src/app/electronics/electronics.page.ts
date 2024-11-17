import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.page.html',
  styleUrls: ['./electronics.page.scss'],
})
export class ElectronicsPage {
  searchTerm: string = ''; // Search term from the search bar

  // Sample Product List
  products = [
    {
      name: 'iPhone',
      price: 14999,
      image: 'https://tse4.mm.bing.net/th?id=OIP.DX7F6weLV7TgywURRb7VeAHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Macbook Pro',
      price: 54999,
      image: 'https://bgr.com/wp-content/uploads/2021/12/16-macbook-pro-8.jpg?quality=82&strip=all',
    },
    {
      name: 'Apple Watch Series 9',
      price: 9999,
      image: 'https://www.techspot.com/images/products/2023/wearables/org/2023-09-20-product.jpg',
    },
    {
      name: 'Middleton Portable Bluetooth Speaker',
      price: 2999,
      image: 'https://tse4.mm.bing.net/th?id=OIP.A88bacuJT8WrYC7MuyRE2gHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Camera',
      price: 19999,
      image: 'https://tse3.mm.bing.net/th?id=OIP.CaG3r6nOQG-DSdVKXN2z-wHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Headphones',
      price: 2999,
      image: 'https://tse1.mm.bing.net/th?id=OIP.rAvct3LQHEOmeELG99irtwHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'iPad Pro',
      price: 24999,
      image: 'https://cdn.macstories.net/img_2287-1621270775533.jpeg',
    },
    {
      name: 'Sony PlayStation 5 (Slim Edition)',
      price: 39999,
      image: 'https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3',
    },
    {
      name: 'Power Bank',
      price: 1999,
      image: 'https://tse3.mm.bing.net/th?id=OIP.mxImNY4k2zlRWhUpiGCyyQHaG9&pid=Api&P=0&h=180',
    },
    {
      name: 'External Hard Drive',
      price: 5999,
      image: 'https://tse2.mm.bing.net/th?id=OIP.0bSrvjv9egaSycrGBfuxPQHaHa&pid=Api&P=0&h=180',
    },
  ];

  // Filtered Products Array
  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController,private cartService: CartService) {}

  // Filters products based on the search term
  filterProducts() {
    const search = this.searchTerm.toLowerCase().trim();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }
  addToCart(product: any) {
    if (product) {
      product.isAdding = true; // Set the loading state for the specific product
      setTimeout(() => {
        this.cartService.addToCart(product);
        product.isAdding = false; // Reset the loading state
        console.log('Added to cart:', product);
      }, 10); // Simulate a delay (e.g., for a backend request)
    } else {
      console.error('Product is not defined or invalid');
    }
  }

  // Method to navigate back to the previous page or a specific page
  goBack() {
    this.navCtrl.navigateBack('/categories'); // Navigates back to the home page
  }
}
