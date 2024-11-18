import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { authState } from 'rxfire/auth'; // Import authState to get real-time user state

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}


  getCurrentUser() {
    return authState(this.auth);
  }
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }


  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {

        this.router.navigate(['/tabs/home']);
      })
      .catch((error) => {
        console.error('Login failed', error);
        throw error;
      });
  }


  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }


  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {

        this.router.navigate(['/tabs/home']);
        return userCredential;
      })
      .catch((error) => {
        console.error('Signup failed', error);
        throw error;
      });
  }
  googleLogin(): Promise<any> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('Google login successful', result);
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('Google login failed', error);
        throw error;
      });
  }

  githubLogin(): Promise<any> {
    const provider = new GithubAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('GitHub login successful', result);
        this.router.navigate(['/tabs/home']);
      })
      .catch((error: any) => {
        console.error('GitHub login failed', error);
        throw error;
      });
  }



  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error in resetting password:', error);
    }
  }
}
