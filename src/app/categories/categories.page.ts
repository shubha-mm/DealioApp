import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  searchTerm: string = '';

  // Example categories
  categories = [
    { name: 'Electronics', icon: 'assets/icons/electronics.png' },
    { name: 'Clothing', icon: 'assets/icons/clothing.png' },
    { name: 'Books', icon: 'assets/icons/books.png' },
    { name: 'Home Decor', icon: 'assets/icons/home-decor.png' },
    { name: 'Toys', icon: 'assets/icons/toys.png' },
    { name: 'Shoes', icon: 'assets/icons/shoes.png' },
    { name: 'Gadgets', icon: 'assets/icons/gadgets.png' },
    { name: 'Beauty', icon: 'assets/icons/beauty.png' },
    { name: 'Sports', icon: 'assets/icons/sports.png' },
    { name: 'Appliances', icon: 'assets/icons/appliances.png' },
    { name: 'Groceries', icon: 'assets/icons/groceries.png' },
    { name: 'Jewelry', icon: 'assets/icons/jewelry.png' },
    // Add more categories as needed
  ];

  // Filtered categories for search
  filteredCategories = [...this.categories];

  // Filter logic for search bar
  filterCategories() {
    const search = this.searchTerm.toLowerCase();
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(search)
    );
  }
}
