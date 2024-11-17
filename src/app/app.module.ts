import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage'; // Import the TabsComponent
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, TabsComponent], // Add TabsComponent here
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"dealio-b246c","appId":"1:688662193534:web:0c883c45d9a686fbf17f2f","storageBucket":"dealio-b246c.firebasestorage.app","apiKey":"AIzaSyBokz0gjjxom1FUUiKk2RjCamhpKAvXP3M","authDomain":"dealio-b246c.firebaseapp.com","messagingSenderId":"688662193534"})), provideAuth(() => getAuth()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
