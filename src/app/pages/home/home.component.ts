import { Component,HostListener } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path
import { CommonModule } from '@angular/common';
import { get } from 'http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private movieApiService: MovieApiServiceService) { }
  bannerData: any=[];
  popularMovies: any=[];
  nowPlaying: any=[];
  ngOnInit(): void {
    this.bannerApiData();
    this.getPopularMovies();
    this.getNowPlaying();
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
  getNowPlaying(){
    this.movieApiService.getNowPlaying().subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'now playing');
      this.nowPlaying = data.results;
    });
  }
  // getMovieDetails(id){  
  //   this.movieApiService.getMovieDetails(id).subscribe((data: any) => { // Specify the type of 'data' as 'any'
  //     console.log(data, 'movie details');
  //   });
  // }

}