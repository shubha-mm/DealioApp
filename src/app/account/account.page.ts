import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  userDetails: any;

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    const userId = 'your-user-id'; // Replace with the actual user ID
    const userDocRef = doc(this.firestore, `Users/${userId}`);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      this.userDetails = userDocSnap.data();
    } else {
      console.log('No user data found');
    }
  }
}
