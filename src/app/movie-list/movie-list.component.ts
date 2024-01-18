import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  searchText: string = '';
  movies: any;

  constructor(private http: HttpClient) {}

  searchMovies() {
    this.http.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '0ef3d6a519f3aa4e500e87c9df24fa85',
        query: this.searchText
      }
    }).subscribe((data: any) => {
      this.movies = data;
    });
  }
}