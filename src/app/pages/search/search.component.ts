import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService) { }

  OnInit() :void{
    
  }
  searchResult:any;
  searchform = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchform.value,"searchform value");
    this.service.getSearchedMovies(this.searchform.value.movieName).subscribe((data)=>{
      console.log(data,"searched movies");
      this.searchResult = data.results;
    });
  }


}
