import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profileForm: FormGroup; // Form for user profile
  profile: any = {}; // Stores user profile data
  selectedFile: File | null = null; // File selected by the user
  isLoading: boolean = false; // Loading state for save operation

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private firestore: Firestore,
    private navCtrl: NavController // NavController for navigation
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    const user = this.auth.currentUser;
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.profile = userDoc.data();
          this.profileForm.patchValue(this.profile);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        alert('Failed to load profile. Please try again.');
      }
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile.imageUrl = e.target.result;
      };
      reader.onerror = () => console.error('Error reading file.');
      reader.readAsDataURL(file);
    }
  }

  async saveProfile() {
    const user = this.auth.currentUser;
    if (user && this.profileForm.valid) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const profileData = { ...this.profileForm.value };
      this.isLoading = true;

      if (this.selectedFile) {
        try {
          const storage = getStorage();
          const fileRef = ref(storage, `profile-images/${user.uid}`);
          await uploadBytes(fileRef, this.selectedFile);
          profileData.imageUrl = await getDownloadURL(fileRef);
        } catch (error) {
          console.error('Error uploading image:', error);
          alert('Image upload failed. Please try again.');
          this.isLoading = false;
          return;
        }
      }

      try {
        await setDoc(userDocRef, profileData, { merge: true });
        alert('Profile updated successfully!');
        this.loadProfile();
      } catch (error) {
        console.error('Error saving profile data:', error);
        alert('Failed to save profile. Please try again.');
      } finally {
        this.isLoading = false;
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }

  // Navigate back to the previous page
  goBack() {
    this.navCtrl.back();
  }
}
