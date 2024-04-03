import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://api.themoviedb.org/3/'; 
  api_key = '41ee980e4b5f05f6693fda00eb7c4fd4';

  
  
  getPopularMovies(){
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api_key}`);
  }
  getNowPlaying(){
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.api_key}`);
  }
  // getMovieDetails
  // getMovieDetails(id){
  //   return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.api_key}`);
  // }
  bannerApiData():Observable<any> {
  
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api_key}`);
  }
}
