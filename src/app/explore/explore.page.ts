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
    { name: 'BEARDO Perfume', price: 449, discountedPrice: 246, discount: 45, image: 'https://sp.yimg.com/ib/th?id=OPAC.B3VAvItUMg4Cxg474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Denver Combo', price: 1160, discountedPrice: 614, discount: 47, image: 'https://tse3.mm.bing.net/th?id=OIP.OiGl4BlW17MUnvcxUHukowHaHa&pid=Api&P=0&h=180' },
    { name: 'Bellavita Perfume', price: 748, discountedPrice: 225, discount: 70, image: 'https://sp.yimg.com/ib/th?id=OPAC.z1Ez6x1liVMSvg474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'iPhone Screen Guard', price: 899, discountedPrice: 249, discount: 72, image: 'https://tse4.mm.bing.net/th?id=OIP.XC7LoGBBnhShVmkPSG2NUAHaHa&pid=Api&P=0&h=180' },
    { name: 'Wireless Earbuds', price: 2999, discountedPrice: 1999, discount: 33, image: 'https://sp.yimg.com/ib/th?id=OPAC.wMFmQR%2bmnLdw7g474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Smartwatch', price: 49, discountedPrice: 3499, discount: 30, image: 'https://i0.wp.com/horleytech.com/wp-content/uploads/2023/01/IWATCH-4.png?fit=680%2C680&ssl=1' },
    { name: 'Bluetooth Speaker', price: 2499, discountedPrice: 1599, discount: 36, image: 'https://sp.yimg.com/ib/th?id=OPAC.IsEz5ykdwKvAmQ474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Men’s Wallet', price: 999, discountedPrice: 599, discount: 40, image: 'https://d3d71ba2asa5oz.cloudfront.net/53000711/images/d01387-02-tan%20(2).jpg' },
    { name: 'Women’s Handbag', price: 2999, discountedPrice: 1499, discount: 50, image: 'https://lulux.ru/wp-content/uploads/2020/01/Gucci-GG-Women-Ophidia-GG-Small-Shoulder-Bag-in-BeigeEbony-GG-Supreme-Canvas-3.jpg' },
    { name: 'Sunglasses', price: 1999, discountedPrice: 999, discount: 50, image: 'https://sp.yimg.com/ib/th?id=OPAC.Zux5THaT5gGdMw474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Face Wash', price: 399, discountedPrice: 199, discount: 50, image: 'https://sp.yimg.com/ib/th?id=OPAC.n%2bjtQR5zjE1NGQ474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Body Lotion', price: 599, discountedPrice: 299, discount: 50, image: 'https://sp.yimg.com/ib/th?id=OPAC.6cQSao%2bYlWg55w474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Hair Serum', price: 799, discountedPrice: 399, discount: 50, image: 'https://sp.yimg.com/ib/th?id=OPAC.QsYyGTLK7Byb6g474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Leather Jacket', price: 8999, discountedPrice: 5999, discount: 33, image: 'https://tse2.mm.bing.net/th?id=OIP.EwxY1W9q8IkUYzC7D2k0ZwHaHY&pid=Api&P=0&h=180' },
    { name: 'Sports Shoes', price: 4999, discountedPrice: 2999, discount: 40, image: 'https://sp.yimg.com/ib/th?id=OPAC.3aoWN4guu3NK2A474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'T-shirt', price: 999, discountedPrice: 599, discount: 40, image: 'https://tse4.mm.bing.net/th?id=OIP.wI004OQzF9DhIYueGLGUmQHaHP&pid=Api&P=0&h=180' },
    { name: 'Backpack', price: 1999, discountedPrice: 1299, discount: 35, image: 'https://sp.yimg.com/ib/th?id=OPAC.FFK2PzZjj79u8Q474C474&o=5&pid=21.1&w=160&h=105' },
    { name: 'Gaming Mouse', price: 1499, discountedPrice: 999, discount: 33, image: 'https://tse4.mm.bing.net/th?id=OIP.ghcoSgxA2zwZb1Il67RRDwHaHy&pid=Api&P=0&h=180' },
    { name: 'Keyboard', price: 2499, discountedPrice: 1599, discount: 36, image: 'https://tse3.mm.bing.net/th?id=OIP._nZZabFouvXt8PlTm61QlwHaDm&pid=Api&P=0&h=180' },
    { name: 'Men’s Watch', price: 6999, discountedPrice: 3999, discount: 43, image: 'https://tse4.mm.bing.net/th?id=OIP.GRRyX_fcBIU_3zUZvlRf_gHaHa&pid=Api&P=0&h=180' },
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
