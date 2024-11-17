import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component'; // Import the TabsComponent

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsComponent, // Use the TabsComponent
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('./explore/explore.module').then((m) => m.ExplorePageModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then((m) => m.CategoriesPageModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'clothing',
    loadChildren: () => import('./clothing/clothing.module').then( m => m.ClothingPageModule)
  },
  {
    path: 'toys',
    loadChildren: () => import('./toys/toys.module').then( m => m.ToysPageModule)
  },
  {
    path: 'shoes',
    loadChildren: () => import('./shoes/shoes.module').then( m => m.ShoesPageModule)
  },
  {
    path: 'groceries',
    loadChildren: () => import('./groceries/groceries.module').then( m => m.GroceriesPageModule)
  },
  {
    path: 'electronics',
    loadChildren: () => import('./electronics/electronics.module').then( m => m.ElectronicsPageModule)
  },
  {
    path: 'beauty',
    loadChildren: () => import('./beauty/beauty.module').then( m => m.BeautyPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
