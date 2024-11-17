import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.page.html',
  styleUrls: ['./toys.page.scss'],
})
export class ToysPage {
  searchTerm: string = '';

 
  products = [
    {
      name: 'Action Figure',
      price: 799,
      image: 'https://shop.bandai.co.uk/wp-content/uploads/2023/05/40671-bandai-game-dimensions-tekken-kazuya-2-1000x1800.jpg',
    },
    {
      name: 'Lego Set',
      price: 1599,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.TNXQCFxYXgUq%2fQ474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Doll House',
      price: 2499,
      image: 'https://i.pinimg.com/originals/12/05/90/120590638c38efe62586eeb13e0f4519.jpg',
    },
    {
      name: 'Toy Car',
      price: 699,
      image: 'https://i5.walmartimages.com/asr/aa58ff13-86bb-4fd1-9204-0476f29d220f.f43c4cba3524b469924807b41900e4a3.jpeg',
    },
    {
      name: 'Board Game',
      price: 1299,
      image: 'https://gamexcart.com/wp-content/uploads/2020/10/7503-Elite-Scrabble-Box-2020-Dummy-Front-e1602309100918.png',
    },
    {
      name: 'Puzzle Set',
      price: 499,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.38dJnNYjEy3Z4A474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Stuffed Toy',
      price: 899,
      image: 'https://i5.walmartimages.com/asr/683488a1-eff8-4a0e-b076-9bb782a16c14.60bbfc5d285269f3a12eeb9c85dae585.jpeg',
    },
    {
      name: 'Remote Control Helicopter',
      price: 3499,
      image: 'https://m.media-amazon.com/images/I/61mi4IvEKGL._AC_SL1500_.jpg',
    },
    {
      name: 'Building Blocks',
      price: 1099,
      image: 'https://sp.yimg.com/ib/th?id=OPAC.cCZD%2fZxepVARFA474C474&o=5&pid=21.1&w=160&h=105',
    },
    {
      name: 'Water Gun',
      price: 599,
      image: 'https://i5.walmartimages.com/asr/9918d0a8-42c4-475e-8a1b-392fdf973b2c_1.89bc3b77cf1ab3073a708678f143e7aa.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    },
  ];

  
  filteredProducts = [...this.products];

  constructor(private navCtrl: NavController) {}

  filterProducts() {
    const search = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }


  goBack() {
    this.navCtrl.navigateBack('/categories'); 
  }
}
