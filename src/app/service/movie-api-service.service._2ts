import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MovieType {
  name: string;
  genres: number;
};

@Injectable({
  providedIn: 'root'
})

export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  
  // 這是您的 Google Apps Script Web App 的 URL
  baseUrl = 'https://script.google.com/macros/s/AKfycbwX-Opm65UotRrJ0khgiS1-cTaiMLrvwi9qZX1dskaDc35mf_Z-eJ0EOV7W-fZnOj9x/exec'; 

  movielib: MovieType[] = [
    { name: "action", genres: 28 },
    { name: "adventure", genres: 12 },
    { name: "animation", genres: 16 },
    { name: "comedy", genres: 35 },
    { name: "documentary", genres: 99 },
    { name: "science fiction", genres: 878 },
    { name: "thriller", genres: 53 }
  ];
  
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getPopularMovies`);
  }

  getMovies(genreId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getMovies&genreId=${genreId}`);
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getNowPlaying`);
  }

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getPopularMovies`);
  }

  trendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getTrendingMovies`);
  }

  getSearchedMovies(searchedMovie: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getSearchedMovies&searchedMovie=${searchedMovie}`);
  }

  getMovieDetails(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getMovieDetails&id=${id}`);
  }

  getMovieVideos(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getMovieVideos&id=${id}`);
  }

  getMovieReviews(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getMovieReviews&id=${id}`);
  }

  getMovieCast(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getMovieCast&id=${id}`);
  }
}
