import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  student = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private studentService: AuthService) { }

  register() {
    // Call the register method from the service
    this.studentService.register(this.student).subscribe(
      (response) => {
        console.log('Registration successful', response);
        // You can also redirect or show a success message here
      },
      (error) => {
        console.error('Registration error', error);
        // Handle the error (e.g., show an error message to the user)
      }
    );
  }

}
