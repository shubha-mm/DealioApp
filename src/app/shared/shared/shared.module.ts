import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { FooterComponent } from 'src/app/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule // Add IonicModule here to enable Ionic components
  ],
  exports: [FooterComponent]
})
export class SharedModule {}
