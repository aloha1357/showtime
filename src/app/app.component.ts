import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     FormsModule,
     RouterLink,
     RouterLinkActive,
     HttpClientModule
    ],
  providers: [MovieApiServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'showtime';
}
