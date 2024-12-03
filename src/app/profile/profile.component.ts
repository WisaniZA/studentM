import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  student: any = {}; // Object to hold profile data
  loading = false;  // Flag for loading state
  error: string | null = null; // To handle any errors

  constructor(
    private studentService: AuthService, // Assuming this service has a method for fetching student profiles
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Fetch student profile when component is initialized
    this.fetchProfile();
  }

  fetchProfile(): void {
    this.loading = true;
    // Call the getProfile method from your student service
    this.studentService.getProfile().subscribe(
      (data) => {
        this.student = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load profile';
        this.loading = false;
      }
    );
  }

}
