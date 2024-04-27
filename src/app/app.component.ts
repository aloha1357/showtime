import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { UserApiService } from './user/user-api.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     CommonModule,
     RouterOutlet,
     FormsModule,
     RouterLink,
     RouterLinkActive,
     HttpClientModule,
     ReactiveFormsModule,
    ],
  providers: [MovieApiServiceService,
              UserApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'showtime';
  navbarOpen = false;
  constructor(public userService: UserApiService) {}

  ngOnInit() {
    this.userService.checkLoginStatus();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
  }
}
