// src/app/home/home.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Import IonicModule to use Ionic components
    HomePageRoutingModule,
    SharedModule // Import SharedModule for FooterComponent
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this schema to support custom elements
})
export class HomePageModule {}
