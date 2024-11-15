import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isLandingPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Check if the current route is the landing page
      this.isLandingPage = this.router.url === '/landing';
    });
  }
}