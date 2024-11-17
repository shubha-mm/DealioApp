import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss'],
})
export class ClothingPage {
  searchTerm: string = '';


  products = [
    {
      name: 'Men’s T-Shirt',
      price: 499,
      image: 'https://tse2.mm.bing.net/th?id=OIP.Ub6YpRIAymTwuyjRcSD92QHaIL&pid=Api&P=0&h=180',
    },
    {
      name: 'Women’s Dress',
      price: 1299,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.cJofKjKk9reY0w474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Men’s Jeans',
      price: 999,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.LfzcxqTH2xMpXQ474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Gloves',
      price: 799,
      image: 'https://tse2.mm.bing.net/th?id=OIP.B5XMrLi7v9IDyj_J9aGWTgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Jacket',
      price: 1499,
      image: 'https://tse4.mm.bing.net/th?id=OIP.T6Kia_X1PbygHl48iNvSQwHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Hoodie',
      price: 1199,
      image: 'https://tse3.mm.bing.net/th?id=OIP.sZRtqU2OUNyJIbrC3vu8WgHaJQ&pid=Api&P=0&h=180',
    },
    {
      name: 'Sweater',
      price: 899,
      image: 'https://tse4.mm.bing.net/th?id=OIP.8YDVhlJ6722VQdksPxLGKwHaJ4&pid=Api&P=0&h=180',
    },
    {
      name: 'Tracksuit',
      price: 1599,
      image: 'https://tse2.mm.bing.net/th?id=OIP.kJBOHcjW_GtdGbLDZWcBawHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Shirt',
      price: 599,
      image: 'https://tse4.mm.bing.net/th?id=OIP.lMrYyXPth1a1jQ6W5HFl4wHaJ4&pid=Api&P=0&h=180',
    },
    {
      name: 'Blazer',
      price: 2499,
      image: 'https://tse2.mm.bing.net/th?id=OIP.he6BhZUgZVWSTF-khCAdjQHaJ4&pid=Api&P=0&h=180',
    },
  ];


  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController) {}

  
  filterProducts() {
    const search = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }

  // Navigate back to the categories page
  goBack() {
    this.navCtrl.navigateBack('/categories'); // Replace with your fallback route
  }
}
