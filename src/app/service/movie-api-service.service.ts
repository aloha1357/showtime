import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // 根據文件位置調整路徑

interface MovieType {
  name: string;
  genres: number;
};

@Injectable({
  providedIn: 'root'
})

export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://api.themoviedb.org/3/'; 
  // api_key = '41ee980e4b5f05f6693fda00eb7c4fd4';
  api_key = environment.api_key;

  movielib: MovieType[] = [
    { name: "action", genres: 28 },
    { name: "adventure", genres: 12 },
    { name: "animation", genres: 16 },
    { name: "comedy", genres: 35 },
    { name: "documentary", genres: 99 },
    { name: "science fiction", genres: 878 },
    { name: "thriller", genres: 53 }
  ];
  
  getPopularMovies(){
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api_key}`);
  }

  getMovies(genreId: string) {
    const type = this.movielib.find(type => type.name === genreId);
    if (!type) {
      throw new Error('Genre not found');
    }
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=${type.genres}`);
  }

  getNowPlaying(){
    return this.http.get(`${this.baseUrl}movie/now_playing?language=zh&api_key=${this.api_key}`);
  }
  bannerApiData():Observable<any> {
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api_key}`);
  }
  trendingMovies():Observable<any> {
    return this.http.get(`${this.baseUrl}trending/movie/day?api_key=${this.api_key}`);
  }
  getSearchedMovies(searchedMovie:any):Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?query=${searchedMovie}&api_key=${this.api_key}`);
  }
  getMovieDetails(id:any):Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.api_key}`);
  }
  getMovieVideos(id:any):Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.api_key}`);
  }
  getMovieReviews(id:any):Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.api_key}`);
  }
  getMovieCast(id:any):Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.api_key}`);
  }
}
