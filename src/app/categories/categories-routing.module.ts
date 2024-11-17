import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
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
export class CategoriesPageRoutingModule {}
