import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {
  products: { name: string; price: number; image: string }[] = [
    { name: 'Product 1', price: 25, image: 'assets/product1.jpg' },
    { name: 'Product 2', price: 30, image: 'assets/product2.jpg' },
    // Add more products as needed
  ];

  constructor() {}

  ngOnInit() {}
}
