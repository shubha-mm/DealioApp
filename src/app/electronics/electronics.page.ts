import { Component } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.page.html',
  styleUrls: ['./electronics.page.scss'],
})
export class ElectronicsPage {
  searchTerm: string = '';

  // Sample Product List with 10 items
  products = [
    {
      name: 'Smartphone',
      price: 14999,
      image: 'assets/images/smartphone.jpg',
    },
    {
      name: 'Laptop',
      price: 54999,
      image: 'assets/images/laptop.jpg',
    },
    {
      name: 'Smartwatch',
      price: 9999,
      image: 'assets/images/smartwatch.jpg',
    },
    {
      name: 'Bluetooth Speaker',
      price: 2999,
      image: 'assets/images/speaker.jpg',
    },
    {
      name: 'Camera',
      price: 19999,
      image: 'assets/images/camera.jpg',
    },
    {
      name: 'Headphones',
      price: 2999,
      image: 'assets/images/headphones.jpg',
    },
    {
      name: 'Tablet',
      price: 24999,
      image: 'assets/images/tablet.jpg',
    },
    {
      name: 'Gaming Console',
      price: 39999,
      image: 'assets/images/console.jpg',
    },
    {
      name: 'Power Bank',
      price: 1999,
      image: 'assets/images/powerbank.jpg',
    },
    {
      name: 'External Hard Drive',
      price: 5999,
      image: 'assets/images/harddrive.jpg',
    },
  ];

  // Filtered Products Array
  filteredProducts = [...this.products];

  // Filter Logic
  filterProducts() {
    const search = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }
}
