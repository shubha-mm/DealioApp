import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithRedirect, GithubAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authState } from 'rxfire/auth'; // Import authState to get real-time user state

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // Get current user as an observable
  getCurrentUser(): Observable<any> {
    return authState(this.auth); // This returns the current user as an observable
  }

  // Login with email and password
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // If login is successful, navigate to the home page
        this.router.navigate(['/tabs/home']);
      })
      .catch((error) => {
        console.error('Login failed', error);
        throw error; // Propagate error if login fails
      });
  }

  // Logout and redirect to login page
  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/tabs/home']);
    });
  }

  // Google login method
  async googleLogin(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      this.router.navigate(['/tabs/home']);
      return result;
    } catch (error) {
      console.error('Error in Google login:', error);

      // Log more details for debugging
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }

      if ((error as any).code) {
        console.error('Error code:', (error as any).code);
      }

      if ((error as any).message) {
        console.error('Error message:', (error as any).message);
      }

      throw error;
    }
  }

  // Sign up with email and password
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // On successful signup, navigate to home page
        this.router.navigate(['/tabs/home']);
        return userCredential;
      })
      .catch((error) => {
        console.error('Signup failed', error);
        throw error; // Propagate error if signup fails
      });
  }

  async githubLogin(): Promise<any> {
    try {
      const provider = new GithubAuthProvider();
      await signInWithRedirect(this.auth, provider); // Using redirect for GitHub login
      // After redirection, the result will be available in the FirebaseAuth listener
    } catch (error) {
      console.error('Error in GitHub login:', error);
      throw error;
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error in resetting password:', error);
    }
  }
}
