import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.page.html',
  styleUrls: ['./shoes.page.scss'],
})
export class ShoesPage {
  searchTerm: string = '';
  products = [
    {
      name: 'Running Shoes',
      price: 1999,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.AWdhkfnUQ0S2FA474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Formal Shoes',
      price: 2499,
      image: 'https://ae01.alicdn.com/kf/HTB1omcpXfjsK1Rjy1Xaq6zispXao/Men-Flats-Genuine-Leather-Dress-Shoes-Brogue-Oxford-Lace-Up-Summer-Male-Casual-Shoes-Black-Brown.jpg',
    },
    {
      name: 'Casual Sneakers',
      price: 1499,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.4l0kOE0oxQb68Q474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Sports Shoes',
      price: 2999,
      image: 'https://tse4.mm.bing.net/th?id=OIP.s3bXG2_4t9EFBYOwPNIUAwHaF_&pid=Api&P=0&h=180',
    },
    {
      name: 'Loafers',
      price: 1999,
      image: 'https://tse2.mm.bing.net/th?id=OIP.T60J2A0xUrncJ5oTVngqkQHaGL&pid=Api&P=0&h=180',
    },
    {
      name: 'Boots',
      price: 3499,
      image: 'https://tse2.mm.bing.net/th?id=OIP.wPcOTvX6Lm4fiTFa0RjCEgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Slip-on Shoes',
      price: 1299,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.ehe7tj38ajM4wQ474C474&o=5&pid=21.1&w=174&h=174',
    },
    {
      name: 'Sandals',
      price: 899,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.u1%2flRySPsLlsyA474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Flip Flops',
      price: 499,
      image: 'https://assets.ajio.com/medias/sys_master/root/20241104/itdv/6728c2cef9b8ef490bfffd6f/-473Wx593H-469685698-brown-MODEL.jpg',
    },
    {
      name: 'High Heels',
      price: 2999,
      image: 'https://tse3.mm.bing.net/th?id=OIP.7oo0KRBCZfSw9WTtTtCHSgHaE8&pid=Api&P=0&h=180',
    },
  ];

  // Filtered Products Array
  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController, private cartService: CartService) {}

  // Filter shoe products based on the search term
  filterProducts() {
    const search = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }

  addToCart(product: any) {
    if (product) {
      product.isAdding = true; // Set the loading state for the specific product
      setTimeout(() => {
        this.cartService.addToCart(product);
        product.isAdding = false; // Reset the loading state
        console.log('Added to cart:', product);
      }, 10); // Simulate a delay (e.g., for a backend request)
    } else {
      console.error('Product is not defined or invalid');
    }
  }

  // Navigate back to the categories page
  goBack() {
    this.navCtrl.navigateBack('/tabs/categories'); // Replace with your fallback route
  }
}
