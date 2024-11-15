import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronicsPageRoutingModule } from './electronics-routing.module';

import { ElectronicsPage } from './electronics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronicsPageRoutingModule
  ],
  declarations: [ElectronicsPage]
})
export class ElectronicsPageModule {}
