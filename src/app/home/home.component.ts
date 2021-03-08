import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarouselService } from './../shared/carousel.service';
import { GenreService } from './../shared/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  featured: any;
  genres: any;
  errorMessages: string;

  constructor(
    private _carouselService: CarouselService,
    private _genreService: GenreService,
    public _router: Router,
    public _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getSlides();
    this.getMovieGenre();
  }

  getSlides() {
    this._carouselService.featured()
      .subscribe(
        res => { this.featured = res },
        error => this.errorMessages = <any> error,
        // () => console.log(this.featured)
    );
    // console.log(this.featured);
  }

  getMovieGenre() {
    this._genreService.getGenre()
      .subscribe(
        res => { this.genres = res },
        error => this.errorMessages = <any> error,
    );
    // console.log(this.featured);
  }

  onOpenGenre(id) {
    this._router.navigate(['/genre/' + id]);
  }

}
