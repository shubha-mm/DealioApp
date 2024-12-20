import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },

  // Tabs and their child routes
  {
    path: 'tabs',
    component: TabsComponent, // Parent TabsComponent
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
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
        redirectTo: 'home', // Default tab fallback
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
    loadChildren: () =>
      import('./clothing/clothing.module').then((m) => m.ClothingPageModule),
  },
  {
    path: 'toys',
    loadChildren: () =>
      import('./toys/toys.module').then((m) => m.ToysPageModule),
  },
  {
    path: 'shoes',
    loadChildren: () =>
      import('./shoes/shoes.module').then((m) => m.ShoesPageModule),
  },
  {
    path: 'groceries',
    loadChildren: () =>
      import('./groceries/groceries.module').then((m) => m.GroceriesPageModule),
  },
  {
    path: 'electronics',
    loadChildren: () =>
      import('./electronics/electronics.module').then((m) => m.ElectronicsPageModule),
  },
  {
    path: 'beauty',
    loadChildren: () =>
      import('./beauty/beauty.module').then((m) => m.BeautyPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  // {
  //   path: 'payment-method',
  //   loadChildren: () =>
  //     import('./payment-method/payment-method.module').then((m) => m.PaymentMethodPageModule),
  // },
  // {
  //   path: 'razorpay-payment',
  //   loadChildren: () =>
  //     import('./razorpay-payment/razorpay-payment.module').then((m) => m.RazorpayPaymentPageModule),
  // },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutPageModule),
  },



  {
    path: '',
    redirectTo: 'tabs/categories',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Use preload strategy for optimization
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
