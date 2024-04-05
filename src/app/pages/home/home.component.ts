import { Component,HostListener } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private movieApiService: MovieApiServiceService) { }
  bannerData: any=[];
  popularMovies: any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerApiData();
    this.getPopularMovies();
    this.getMovies();
  }

  bannerApiData(){
    this.movieApiService.bannerApiData().subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'banner data');
      this.bannerData = data.results;
    });
  }

  getPopularMovies(){ 
    this.movieApiService.getPopularMovies().subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'popular movies');
      this.popularMovies = data.results;
    });
  }

  getMovies(){  
    this.movieApiService.getMovies('action').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'action movies');
      this.actionMovieResult = data.results;
    });
    this.movieApiService.getMovies('adventure').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'adventure movies');
      this.adventureMovieResult = data.results;
    });
    this.movieApiService.getMovies('animation').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'animation movies');
      this.animationMovieResult = data.results;
    });
    this.movieApiService.getMovies('comedy').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'comedy movies');
      this.comedyMovieResult = data.results;
    });
    this.movieApiService.getMovies('documentary').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'documentary movies');
      this.documentaryMovieResult = data.results;
    });
    this.movieApiService.getMovies('science fiction').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'science fiction movies');
      this.sciencefictionMovieResult = data.results;
    });
    this.movieApiService.getMovies('thriller').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'thriller movies');
      this.thrillerMovieResult = data.results;
    });
  }

}