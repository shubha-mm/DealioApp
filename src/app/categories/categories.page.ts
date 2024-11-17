import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  searchTerm: string = '';

  // Categories with Ionicons
  categories = [
    { name: 'Electronics', icon: 'desktop-outline', route: '/electronics' },
    { name: 'Clothing', icon: 'shirt-outline', route: '/clothing' },
    { name: 'Toys', icon: 'game-controller-outline', route: '/toys' },
    { name: 'Shoes', icon: 'footsteps-outline', route: '/shoes' },
    { name: 'Beauty', icon: 'color-palette-outline', route: '/beauty' },
    { name: 'Groceries', icon: 'cart-outline', route: '/groceries' },
  ];

  filteredCategories = [...this.categories]; // Initialize filtered categories

  constructor() {}

  // Filter categories based on the search term
  filterCategories() {
    const search = this.searchTerm.toLowerCase();
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(search)
    );
  }
<<<<<<< HEAD
=======


  goBack() {
    this.navCtrl.navigateBack('/categories'); 
  }
>>>>>>> 15864ea37e68eb3d827c95e664278c4d6dba0b74
}
