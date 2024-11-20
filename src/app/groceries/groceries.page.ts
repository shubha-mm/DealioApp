import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
})
export class GroceriesPage {
  searchTerm: string = '';


  products = [
    {
      name: 'Rice (1kg)',
      price: 80,
      image: 'https://tse4.mm.bing.net/th?id=OIP.jB5HSPGURNabof7IwlOPWAHaJD&pid=Api&P=0&h=180',
    },
    {
      name: 'Milk (1 liter)',
      price: 60,
      image: 'https://tse2.mm.bing.net/th?id=OIP.3AiGqdi1Nu4cTCJI7docfAHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Eggs (12 pcs)',
      price: 90,
      image: 'https://tse4.mm.bing.net/th?id=OIP.Qel8wiUAjBkd4K9usj6WXgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Wheat Flour (5kg)',
      price: 200,
      image: 'https://tse4.mm.bing.net/th?id=OIP.QPvN_B5Wt-SC_wN7YXZULQHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Olive Oil (1 liter)',
      price: 120,
      image: 'https://thumbs.dreamstime.com/z/natural-olive-oil-liter-packed-plastic-bottle-product-ready-to-use-turkey-isolated-white-background-201127288.jpg',
    },
    {
      name: 'Sugar (1kg)',
      price: 50,
      image: 'https://tse3.mm.bing.net/th?id=OIP.FltNLcBgXAFF_RcIyiPapAHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Salt (1kg)',
      price: 20,
      image: 'https://www.spencers.in/media/catalog/product/1/3/1331664.jpg',
    },
    {
      name: 'Green Tea (200g)',
      price: 150,
      image: 'https://tse3.mm.bing.net/th?id=OIP.yZbADkVWyU8yLEh1JQZqnwHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Coffee ',
      price: 300,
      image: 'https://tse1.mm.bing.net/th?id=OIP.EmbKo6INiFl26xVzccBDnwHaHL&pid=Api&P=0&h=180',
    },
    {
      name: 'Packaged Biscuits',
      price: 40,
      image: 'https://tse1.mm.bing.net/th?id=OIP.cIEh--_cNDGrYiiCd8kiZgHaEW&pid=Api&P=0&h=180',
    },
  ];


  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController,private cartService: CartService) {}

  addToCart(product: any) {
    if (product) {
      product.isAdding = true; 
      setTimeout(() => {
        this.cartService.addToCart(product);
        product.isAdding = false;
        console.log('Added to cart:', product);
      }, 10);
    } else {
      console.error('Product is not defined or invalid');
    }
  }


  filterProducts() {
    const search = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }


  goBack() {
    this.navCtrl.navigateBack('/tabs/categories');
  }
}
