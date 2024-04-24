import { Component } from '@angular/core';
import { UserApiService } from '../../../user/user-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotEmail: string = '';

  constructor(private userApi: UserApiService) {}

  onSubmitForgotPassword(): void {
    this.userApi.forgotPassword(this.forgotEmail).subscribe({
      next: response => {
        console.log('Reset link sent successfully', response);
        alert('Reset link sent to your email address.');
      },
      error: error => {
        console.error('Failed to send reset link', error);
        alert('Failed to send reset link.');
      }
    });
  }
}
