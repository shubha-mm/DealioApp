import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  searchTerm: string = ''; // Search term for filtering categories

  // Categories with Ionicons
  categories = [
    { name: 'Electronics', icon: 'desktop-outline', route: '/electronics' },
    { name: 'Clothing', icon: 'shirt-outline', route: '/clothing' },
    { name: 'Toys', icon: 'game-controller-outline', route: '/toys' },
    { name: 'Shoes', icon: 'footsteps-outline', route: '/shoes' },
    { name: 'Beauty', icon: 'color-palette-outline', route: '/beauty' },
    { name: 'Groceries', icon: 'cart-outline', route: '/groceries' },
  ];

  filteredCategories = [...this.categories];

  constructor(private navCtrl: NavController) {}

  // Filter categories based on the search term
  filterCategories() {
    const search = this.searchTerm.toLowerCase();
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(search)
    );
  }

  // Navigate back to the categories page
  goBack() {
    this.navCtrl.navigateBack('/categories'); // Navigate back to the categories page
  }
}
