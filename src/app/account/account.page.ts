import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profileForm: FormGroup; // Form for user profile
  profile: any = {}; // Stores user profile data
  selectedFile: File | null = null; // File selected by the user

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private firestore: Firestore
  ) {
    // Initialize the form
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadProfile(); // Load user profile on page initialization
  }

  // Load user profile data from Firestore
  async loadProfile() {
    const user = this.auth.currentUser;
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        this.profile = userDoc.data(); // Populate the profile
        this.profileForm.patchValue(this.profile); // Pre-fill form fields
      }
    }
  }

  // Handle file selection for profile image
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      this.selectedFile = file; // Assign the file to selectedFile
      const reader = new FileReader();

      // Preview the image
      reader.onload = (e: any) => {
        this.profile.imageUrl = e.target.result;
      };

      // Handle file reading errors
      reader.onerror = () => {
        console.error('There was an error reading the file.');
      };

      reader.readAsDataURL(file); // Read the file as Data URL for preview
    } else {
      console.warn('No file was selected.');
    }
  }

  // Save profile data to Firestore and upload image to Firebase Storage
  async saveProfile() {
    const user = this.auth.currentUser;
    if (user && this.profileForm.valid) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const profileData = { ...this.profileForm.value };
  
      if (this.selectedFile) {
        try {
          const storage = getStorage();
          const fileRef = ref(storage, `profile-images/${user.uid}`);
          // Upload file to Firebase Storage
          await uploadBytes(fileRef, this.selectedFile);
          // Get the download URL of the uploaded file
          profileData.imageUrl = await getDownloadURL(fileRef);
        } catch (error) {
          console.error('Error uploading image:', error);
          alert('Image upload failed. Please try again.');
          return; // Exit the function if upload fails
        }
      }
  
      // Save profile data to Firestore
      try {
        await setDoc(userDocRef, profileData, { merge: true });
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error saving profile data:', error);
        alert('Failed to save profile. Please try again.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
  

  
}
