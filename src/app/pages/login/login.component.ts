import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { UserApiService } from '../../user/user-api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,       // For using ngModel
    // HttpClientModule  // Required for HttpClient used by UserApiService
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private userApi: UserApiService) {}

  onSubmit() {
    this.userApi.login(this.user.email, this.user.password).subscribe(
      response => {
        console.log('Login successful', response);
        // Handle response here
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  forgotPassword() {
    this.userApi.forgotPassword(this.user.email).subscribe(
      response => {
        alert('已發送密碼重設的連結至您的郵箱');
      },
      error => {
        console.error('Error sending forgot password email', error);
      }
    );
  }
}
