import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {
  searchTerm: string = ''; // Holds the search input

  // Array of products
  products: Array<{
    name: string;
    price: number;
    discountedPrice: number;
    discount: number;
    image: string;
    isAdding?: boolean;
  }> = [
    {
      name: 'BEARDO Perfume',
      price: 449,
      discountedPrice: 246,
      discount: 45,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.B3VAvItUMg4Cxg474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Denver Combo',
      price: 1160,
      discountedPrice: 614,
      discount: 47,
      image: 'https://tse3.mm.bing.net/th?id=OIP.OiGl4BlW17MUnvcxUHukowHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Bellavita Perfume',
      price: 748,
      discountedPrice: 225,
      discount: 70,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.z1Ez6x1liVMSvg474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'iPhone Screen Guard',
      price: 899,
      discountedPrice: 249,
      discount: 72,
      image: 'https://tse4.mm.bing.net/th?id=OIP.XC7LoGBBnhShVmkPSG2NUAHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Wireless Earbuds',
      price: 2999,
      discountedPrice: 1999,
      discount: 33,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.wMFmQR%2bmnLdw7g474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Smartwatch',
      price: 4999,
      discountedPrice: 3499,
      discount: 30,
      image: 'https://i0.wp.com/horleytech.com/wp-content/uploads/2023/01/IWATCH-4.png?fit=680%2C680&ssl=1',
    },
    {
      name: 'Bluetooth Speaker',
      price: 2499,
      discountedPrice: 1599,
      discount: 36,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.IsEz5ykdwKvAmQ474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Men’s Wallet',
      price: 999,
      discountedPrice: 599,
      discount: 40,
      image: 'https://d3d71ba2asa5oz.cloudfront.net/53000711/images/d01387-02-tan%20(2).jpg',
    },
    {
      name: 'Women’s Handbag',
      price: 2999,
      discountedPrice: 1499,
      discount: 50,
      image: 'https://lulux.ru/wp-content/uploads/2020/01/Gucci-GG-Women-Ophidia-GG-Small-Shoulder-Bag-in-BeigeEbony-GG-Supreme-Canvas-3.jpg',
    },
    {
      name: 'Sunglasses',
      price: 1999,
      discountedPrice: 999,
      discount: 50,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.Zux5THaT5gGdMw474C474&o=5&pid=21.1&w=160&h=105',
    },
    // Add additional products as needed
  ];

  // Filtered products array
  filteredItems: Array<{
    name: string;
    price: number;
    discountedPrice: number;
    discount: number;
    image: string;
    isAdding?: boolean;
  }> = [...this.products];

  constructor(private cartService: CartService, private navCtrl: NavController) {}

  // Filters products based on the search term
  filterItems() {
    const searchText = this.searchTerm.toLowerCase();
    this.filteredItems = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
  }

  // Add product to cart
  addToCart(product: any) {
    if (product) {
      product.isAdding = true; // Set the loading state for the specific product
      setTimeout(() => {
        this.cartService.addToCart(product);
        product.isAdding = false; // Reset the loading state
        console.log('Added to cart:', product);
      }, 1000); // Simulate a delay (e.g., for a backend request)
    } else {
      console.error('Product is not defined or invalid');
    }
  }

  // Navigate back to the previous page
  goBack() {
    this.navCtrl.back();
  }
}
