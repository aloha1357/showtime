import { Component } from '@angular/core';
import { UserApiService } from '../../../user/user-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  submitted: boolean = false;  // 是否提交过表单
  isValidEmail: boolean = true;  // 初始假设输入有效
  isValidUsername: boolean = true;  // 初始假设输入有效
  isValidPassword: boolean = true;  // 初始假设输入有效
  emailError: string = '';
  usernameError: string = '';
  passwordError: string = '';
  constructor(private userApi: UserApiService) {}

  onSignUp(): void {
    this.submitted = true;
    if (this.validateInputs()) {
      this.userApi.signup(this.username, this.email, this.password).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // 进一步处理，例如跳转或显示成功消息
        },
        error: (error) => {
          console.error('Registration failed', error);
          // 处理错误，例如显示错误消息
        }
      });
    }
  }

    validateInputs(): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

      this.isValidEmail = emailRegex.test(this.email);
      this.emailError = this.isValidEmail ? '' : 'Invalid email address.';

      this.isValidUsername = usernameRegex.test(this.username);
      this.usernameError = this.isValidUsername ? '' : 'Username can only contain letters and numbers.';

      this.isValidPassword = passwordRegex.test(this.password);
      this.passwordError = this.isValidPassword ? '' : 'Password must be at least 8 characters and include both letters and numbers.';

      return this.isValidEmail && this.isValidUsername && this.isValidPassword;
  }

}
