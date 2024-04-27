// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserApiService } from '../../user/user-api.service';
import { RouterLink,Router } from '@angular/router';  // Import Router
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,       // For using ngModel
    RouterLink,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  errorMessage  = '';
  constructor(private userApi: UserApiService, private router: Router) {}  // Inject Router

  onSubmit() {
    this.userApi.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/']);  // Navigate to home on success
      },

      error: (error) => {
        // 适当处理错误信息
        if (error.error.message === 'user not found') {
          this.errorMessage = 'User not found. Would you like to register?';
        } else if (error.error.message === 'invalid credentials') {
          this.errorMessage = 'Invalid credentials. Please try again.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
        console.error('Login failed', error);
      }
    });
  }
}
