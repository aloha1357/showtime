import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  constructor(private movieApiService: MovieApiServiceService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer
              ) { } // Declare activatedRoute as a private property

  ngOnInit(): void {
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id'); // Use this.activatedRoute instead of this.router
    this.getMovieDetails(getParamId);
    this.getMovieVideos(getParamId);
    this.getMovieReviews(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieDetails(id: any){  
    this.movieApiService.getMovieDetails(id).subscribe((data: any) => { 
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
    this.movieApiService.getMovieReviews(id).subscribe((data: any) => { 
      console.log(data, 'movie reviews');
      this.MovieReviewResult = data.results;
    });
  }
  getMovieCast(id: any){
    this.movieApiService.getMovieCast(id).subscribe((data: any) => { 
      console.log(data, 'movie cast');
      this.MovieCastResult = data.cast;
    });
  }


  getSafeUrl(videoId: string): SafeResourceUrl {
    // 注意：为了自动播放并静音，我们添加了`autoplay=1`和`mute=1`
    let url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
