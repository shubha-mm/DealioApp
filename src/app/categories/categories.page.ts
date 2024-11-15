import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  categories = [
    { title: 'Amazon Pay', image: 'assets/images/amazon-pay.png' },
    { title: 'Mobiles & Electronics', image: 'assets/images/mobiles-electronics.png' },
    { title: 'Deals & Savings', image: 'assets/images/deals-savings.png' },
    { title: 'Groceries & Pet Supplies', image: 'assets/images/groceries-pet-supplies.png' },
    { title: 'MiniTV, Video & Music', image: 'assets/images/minitv-video-music.png' },
    { title: 'Fashion & Beauty', image: 'assets/images/fashion-beauty.png' },
    { title: 'Home, Furniture & Décor', image: 'assets/images/home-furniture-decor.png' },
    { title: 'Games & Live Shopping', image: 'assets/images/games-live-shopping.png' },
    { title: 'Pharmacy, Health & Household', image: 'assets/images/pharmacy-health-household.png' }
  ];
}
