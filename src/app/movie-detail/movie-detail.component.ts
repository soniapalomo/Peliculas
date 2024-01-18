import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: '0ef3d6a519f3aa4e500e87c9df24fa85'
      }
    }).subscribe((data: any) => {
      this.movie = data;
    });
  }
}