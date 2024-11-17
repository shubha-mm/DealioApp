import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  contactForm = {
    access_key: 'd81ddb22-db00-4f93-85e9-33e55bd4da67', // Replace with your Web3Forms access key
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  isFormValid(): boolean {
    const { name, email, message } = this.contactForm;
    return name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
  }

  submitForm() {
    if (this.isFormValid()) {
      const apiUrl = 'https://api.web3forms.com/submit';

      this.http.post(apiUrl, this.contactForm).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          alert('Thank you for contacting us!');
          this.contactForm = {
            access_key: 'd81ddb22-db00-4f93-85e9-33e55bd4da67', // Keep the access key
            name: '',
            email: '',
            message: '',
          }; // Reset the form
        },
        error: (error) => {
          console.error('Error submitting the form:', error);
          alert('An error occurred while sending your message. Please try again.');
        },
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}
