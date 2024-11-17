import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signup() {
    this.authService
      .signup(this.email, this.password)
      .then(() => {
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('Signup error:', error);
      });
  }

  githubLogin() {
    this.authService.githubLogin()
      .then(() => {
        console.log('GitHub login successful, redirecting to home.');
        this.router.navigate(['/tabs/home']); // Redirect after successful login
      })
      .catch((error: any) => { // Explicitly typing the error parameter
        console.error('GitHub login error:', error);
      });
  }

  async googleLogin() {
    try {
      await this.authService.googleLogin();
      console.log('Google login successful');
      this.router.navigate(['/tabs/home']); // Redirect after successful login
    } catch (error: any) { // Explicitly typing the error parameter
      console.error('Google login failed', error);
    }
  }
}
