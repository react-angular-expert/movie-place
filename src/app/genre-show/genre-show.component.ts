import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GenreService } from './../shared/genre.service';

@Component({
  selector: 'app-genre-show',
  templateUrl: './genre-show.component.html',
  styleUrls: ['./genre-show.component.css']
})

export class GenreShowComponent implements OnInit{
  id: string;
  genres: any;
  genreCategory: string;
  movies;
  errorMessages;
  rating;
  classes = "";
  page = 1;
  previous = true;

  constructor(
    public _genreService: GenreService,
    public _router: Router,
    public _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];

    this._genreService.genreList(this.id)
    .subscribe(
      res => { this.movies = res },
      error => this.errorMessages = <any> error
    );

    this._genreService.getGenre()
      .subscribe(
        res => {
          this.genres = res,
          this.genreName()
        },
        error => this.errorMessages = <any> error,
    );

  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  genreName() {
    console.log("started")
    for(let i = 0; i < this.genres.length; i++) {

      if( this.genres[i].id == this.id ) {
        this.genreCategory = this.genres[i].name;
        console.log("True");
      }

    }
  }

  prev() {
    this.page -=1;
    this._genreService.genreListNext(this.id, this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.movies = res },
        error => this.errorMessages = <any> error
    );
  }

  next() {
    this.page +=1;
    this._genreService.genreListNext(this.id, this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.movies = res },
        error => this.errorMessages = <any> error
    );
    this.previous = false;
  }


}
