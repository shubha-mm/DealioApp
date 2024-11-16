import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  // Original data
  sidebarCategories = [
    { name: 'Fashion', icon: 'assets/icons/fashion.png' },
    { name: 'Appliances', icon: 'assets/icons/appliances.png' },
    { name: 'Mobiles', icon: 'assets/icons/mobiles.png' },
    { name: 'Electronics', icon: 'assets/icons/electronics.png' },
    { name: 'Smart Gadgets', icon: 'assets/icons/smart-gadgets.png' },
    { name: 'Home', icon: 'assets/icons/home.png' },
    { name: 'Beauty & Personal Care', icon: 'assets/icons/beauty.png' },
    { name: 'Toys, Baby, Books...', icon: 'assets/icons/toys.png' },
  ];

  popularStores = [
    { name: "Children's Day", icon: 'assets/icons/children-day.png' },
    { name: 'Shaadi Specials', icon: 'assets/icons/shaadi-specials.png' },
    { name: 'Pocket Bazaar', icon: 'assets/icons/pocket-bazaar.png' },
  ];

  flipkartFeatures = [
    { name: 'Flipkart Green', icon: 'assets/icons/flipkart-green.png' },
    { name: 'International Brands', icon: 'assets/icons/international-brands.png' },
    { name: 'Luggage & Accessories', icon: 'assets/icons/luggage.png' },
    { name: 'Flipkart Samarth', icon: 'assets/icons/samarth.png' },
    { name: 'Flipkart Originals', icon: 'assets/icons/originals.png' },
    { name: 'Smart Living', icon: 'assets/icons/smart-living.png' },
    { name: 'Next Gen Brands', icon: 'assets/icons/next-gen.png' },
  ];

  triedItems = [
    { name: 'Flash', icon: 'assets/icons/flash.png' },
    { name: 'Gift Cards', icon: 'assets/icons/gift-cards.png' },
    { name: 'Payments', icon: 'assets/icons/payments.png' },
  ];

  // Filtered data (to be displayed)
  filteredSidebarCategories = [...this.sidebarCategories];
  filteredPopularStores = [...this.popularStores];
  filteredFlipkartFeatures = [...this.flipkartFeatures];
  filteredTriedItems = [...this.triedItems];

  constructor() {}

  // Handle search input
  onSearch(event: any) {
    const query = event.target.value.toLowerCase();

    // Filter each section based on the query
    this.filteredSidebarCategories = this.sidebarCategories.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    this.filteredPopularStores = this.popularStores.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    this.filteredFlipkartFeatures = this.flipkartFeatures.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    this.filteredTriedItems = this.triedItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }

  // Placeholder function for navigation
  navigateToCategory(categoryName: string) {
    console.log(`Navigating to category: ${categoryName}`);
    // Add navigation logic if needed
  }
}
