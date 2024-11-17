import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('Login error:', error);
      });
  }

  googleLogin() {
    this.authService
      .googleLogin()
      .then(() => {
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('Google login failed', error);
      });
  }

  githubLogin() {
    this.authService
      .githubLogin()
      .then(() => {
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('GitHub login failed', error);
      });
  }

  async resetPassword() {
    const alert = await this.alertCtrl.create({
      header: 'Reset Password',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Send Reset Link',
          handler: (data: any) => {
            if (data.email) {
              this.authService.resetPassword(data.email);
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
