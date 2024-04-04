import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  MovieDetailResult: any=[];
  MovieVideoResult: any=[];
  MovieReviewResult: any=[];
  MovieCastResult: any=[];
  constructor(private movieApiService: MovieApiServiceService, private activatedRoute: ActivatedRoute) { } // Declare activatedRoute as a private property

  // ...

  ngOnInit(): void {
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id'); // Use this.activatedRoute instead of this.router
    this.getMovieDetails(getParamId);
    this.getMovieVideos(getParamId);
    this.getMovieReviews(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieDetails(id: any){  
    this.movieApiService.getMovieDetails(id).subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'movie details');
      this.MovieDetailResult = data;
    });
  }
  getMovieVideos(id: any){
    this.movieApiService.getMovieVideos(id).subscribe((data: any) => { 
      console.log(data, 'movie videos');
      data.results.map((video: any) => {
        if(video.type == 'Trailer'){
          this.MovieVideoResult = video.key;
        }
      });
    });
  }
  getMovieReviews(id: any){
    this.movieApiService.getMovieReviews(id).subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'movie reviews');
      this.MovieReviewResult = data.results;
    });
  }
  getMovieCast(id: any){
    this.movieApiService.getMovieCast(id).subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'movie cast');
      this.MovieCastResult = data.cast;
    });
  }
}
