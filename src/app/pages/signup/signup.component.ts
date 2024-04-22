import { Component } from '@angular/core';
import { UserApiService } from '../../user/user-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
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
    this.isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    this.isValidUsername = /^[a-zA-Z0-9]+$/.test(this.username);
    this.isValidPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(this.password);
    return this.isValidEmail && this.isValidUsername && this.isValidPassword;
  }
}
