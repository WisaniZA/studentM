import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrl: './updatepassword.component.css'
})
export class UpdatepasswordComponent {

  updatePasswordForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.updatePasswordForm.invalid) {
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.updatePasswordForm.value;

    if (newPassword !== confirmPassword) {
      this.errorMessage = "New password and confirm password do not match.";
      return;
    }

    this.authService.updatePassword(currentPassword, newPassword).subscribe(
      (response) => {
        this.successMessage = "Password updated successfully!";
        this.errorMessage = null;
        setTimeout(() => this.router.navigate(['/profile']), 2000);
      },
      (error) => {
        this.errorMessage = error.message || "An error occurred while updating the password.";
        this.successMessage = null;
      }
    );
  }

}
