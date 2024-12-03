import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {

    const credentials = {
      email: this.email, 
      password: this.password
  };
  
    this.authService.login(credentials).subscribe(
      (response) => {
        if (response && response.success) {  // assuming 'success' indicates a successful login
          this.router.navigate(['/profile']); // Navigate to a protected route
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
  
}
