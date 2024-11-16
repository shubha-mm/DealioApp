import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {
  searchTerm: string = ''; // Holds the search input

  // Array of 20 products
  products = [
    { name: 'BEARDO Perfume', price: 449, discountedPrice: 246, discount: 45, image: 'assets/img/beardo.jpg' },
    { name: 'Denver Combo', price: 1160, discountedPrice: 614, discount: 47, image: 'assets/img/denver.jpg' },
    { name: 'Bellavita Perfume', price: 748, discountedPrice: 225, discount: 70, image: 'assets/img/bellavita.jpg' },
    { name: 'iPhone Screen Guard', price: 899, discountedPrice: 249, discount: 72, image: 'assets/img/iphone-guard.jpg' },
    { name: 'Wireless Earbuds', price: 2999, discountedPrice: 1999, discount: 33, image: 'assets/img/earbuds.jpg' },
    { name: 'Smartwatch', price: 4999, discountedPrice: 3499, discount: 30, image: 'assets/img/smartwatch.jpg' },
    { name: 'Bluetooth Speaker', price: 2499, discountedPrice: 1599, discount: 36, image: 'assets/img/speaker.jpg' },
    { name: 'Men’s Wallet', price: 999, discountedPrice: 599, discount: 40, image: 'assets/img/wallet.jpg' },
    { name: 'Women’s Handbag', price: 2999, discountedPrice: 1499, discount: 50, image: 'assets/img/handbag.jpg' },
    { name: 'Sunglasses', price: 1999, discountedPrice: 999, discount: 50, image: 'assets/img/sunglasses.jpg' },
    { name: 'Face Wash', price: 399, discountedPrice: 199, discount: 50, image: 'assets/img/facewash.jpg' },
    { name: 'Body Lotion', price: 599, discountedPrice: 299, discount: 50, image: 'assets/img/bodylotion.jpg' },
    { name: 'Hair Serum', price: 799, discountedPrice: 399, discount: 50, image: 'assets/img/hairserum.jpg' },
    { name: 'Leather Jacket', price: 8999, discountedPrice: 5999, discount: 33, image: 'assets/img/jacket.jpg' },
    { name: 'Sports Shoes', price: 4999, discountedPrice: 2999, discount: 40, image: 'assets/img/shoes.jpg' },
    { name: 'T-shirt', price: 999, discountedPrice: 599, discount: 40, image: 'assets/img/tshirt.jpg' },
    { name: 'Backpack', price: 1999, discountedPrice: 1299, discount: 35, image: 'assets/img/backpack.jpg' },
    { name: 'Gaming Mouse', price: 1499, discountedPrice: 999, discount: 33, image: 'assets/img/mouse.jpg' },
    { name: 'Keyboard', price: 2499, discountedPrice: 1599, discount: 36, image: 'assets/img/keyboard.jpg' },
    { name: 'Men’s Watch', price: 6999, discountedPrice: 3999, discount: 43, image: 'assets/img/watch.jpg' },
  ];

  // Filtered products array
  filteredItems = [...this.products];

  // Filters products based on the search term
  filterItems() {
    const searchText = this.searchTerm.toLowerCase();
    this.filteredItems = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
  }
}
