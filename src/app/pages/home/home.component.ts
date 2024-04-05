import { Component,HostListener } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

import { MovieApiServiceService } from '../../service/movie-api-service.service'; // Update the import path
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private movieApiService: MovieApiServiceService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute) { }
  bannerData: any=[];
  popularMovies: any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  
  videoUrl: any = ''; // Assign an initial value to 'videoUrl'
  hoverTimeout: any;
  hoveredMovie : any;
  MovieVideoResult: any;

  ngOnInit(): void {
    this.bannerApiData();
    this.getPopularMovies();
    this.getMovies();
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id'); // Use this.activatedRoute instead of this.router
    this.getSafeUrl('tgbNymZ7vqY'); // Assign a default video URL
    this.getMovieVideos(getParamId);
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
  getSafeUrl(videoId: string) {
    this.getMovieVideos(videoId);
    let Id = this.MovieVideoResult;
    let url = `https://www.youtube.com/embed/${Id}?autoplay=1&mute=1`;
    console.log(videoId, 'url');
  }
  onMouseEnter(videoId: string) {
    this.hoverTimeout = setTimeout(() => {
      this.getMovieVideos(videoId);
      let Id = this.MovieVideoResult;
      this.videoUrl = this.getSafeUrl(Id);
    }, 3000); // 3秒后播放
  }

  onMouseLeave() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.videoUrl = ''; // 清除视频URL，停止播放
    }
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
    this.movieApiService.getMovies('sciencefiction').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'science fiction movies');
      this.sciencefictionMovieResult = data.results;
    });
    this.movieApiService.getMovies('thriller').subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log(data, 'thriller movies');
      this.thrillerMovieResult = data.results;
    });
  }

}