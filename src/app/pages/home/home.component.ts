import { Component,HostListener } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private movieApiService: MovieApiServiceService) { }

  ngOnInit(): void {
    this.bannerApiData();
   }
   bannerApiData(){
    this.movieApiService.bannerApiData().subscribe((data)=>{
      console.log(data, 'banner data');
    });
}
}