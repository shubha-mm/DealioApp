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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
