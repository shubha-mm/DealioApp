import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('../explore/explore.module').then((m) => m.ExplorePageModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../categories/categories.module').then((m) => m.CategoriesPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../account/account.module').then((m) => m.AccountPageModule),
  },
  {
    path: 'clothing',
    loadChildren: () => import('../clothing/clothing.module').then( m => m.ClothingPageModule)
  },
  {
    path: 'toys',
    loadChildren: () => import('../toys/toys.module').then( m => m.ToysPageModule)
  },
  {
    path: 'shoes',
    loadChildren: () => import('../shoes/shoes.module').then( m => m.ShoesPageModule)
  },
  {
    path: 'groceries',
    loadChildren: () => import('../groceries/groceries.module').then( m => m.GroceriesPageModule)
  },
  {
    path: 'electronics',
    loadChildren: () => import('../electronics/electronics.module').then( m => m.ElectronicsPageModule)
  },
  {
    path: 'beauty',
    loadChildren: () => import('../beauty/beauty.module').then( m => m.BeautyPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
