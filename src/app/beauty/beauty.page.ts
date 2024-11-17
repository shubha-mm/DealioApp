import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.page.html',
  styleUrls: ['./beauty.page.scss'],
})
export class BeautyPage {
  searchTerm: string = ''; // Search term from the search bar

  // Sample product list for beauty products with 10 items
  products = [
    {
      name: 'Lipstick',
      price: 599,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.%2b3xPTSgn%2bmKwnw474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Foundation',
      price: 799,
      image: 'https://tse2.mm.bing.net/th?id=OIP._yOP2qaPlt6TPhS5NUl_7QHaE8&pid=Api&P=0&h=180',
    },
    {
      name: 'Perfume',
      price: 999,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.LDZ6Bzg3qn92JQ474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Face Wash',
      price: 399,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.ulzSApz6Z0rQlg474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Hair Serum',
      price: 499,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.mGeUPY18%2fz1l6Q474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Moisturizer',
      price: 699,
      image: 'https://tse3.mm.bing.net/th?id=OIP.RGaSg-5c1DK0hddesA2iUQHaE7&pid=Api&P=0&h=180',
    },
    {
      name: 'Eyeliner',
      price: 299,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.U92egHz%2bmXR1HA474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Compact Powder',
      price: 349,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.CGIt4ZKUA7xQ1g474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Shampoo',
      price: 449,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.U1%2bO3Cqea10hNw474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Conditioner',
      price: 499,
      image: 'https://tse1.mm.bing.net/th?id=OIP.Y9zNs0vd5BOk7_gRWbH_2AHaHa&pid=Api&P=0&h=180',
    },
  ];

  // Filtered Products Array
  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController) {}

  // Filter beauty products based on the search term
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
