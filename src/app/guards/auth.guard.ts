import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.getCurrentUser().pipe(
      map(user => {
        if (user) {
          return true;  // User is logged in, allow access to the route
        } else {
          this.router.navigate(['/login']);  // Redirect to login if not logged in
          return false;
        }
      })
    );
  }
}
