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
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('../sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'electronics',
    loadChildren: () => import('../electronics/electronics.module').then( m => m.ElectronicsPageModule)
  },
  {
    path: 'beauty',
    loadChildren: () => import('../beauty/beauty.module').then( m => m.BeautyPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('../sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
