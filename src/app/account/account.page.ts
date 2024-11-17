import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  userDetails: any = null; // To hold user data

  constructor(private firestore: Firestore, private router: Router) {}

  async ngOnInit() {
    try {
      // Replace with dynamic logic to fetch logged-in user's ID
      const userId = 'your-user-id'; // Example static user ID
      const userDocRef = doc(this.firestore, `Users/${userId}`);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        this.userDetails = userDocSnap.data();
        console.log('User Details:', this.userDetails);
      } else {
        console.warn('No user data found for the given ID');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }

  // Navigate to /tabs/home
  goBack() {
    this.router.navigate(['/tabs/home']);
  }
}
