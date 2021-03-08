import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from './../shared/carousel.service';

@Component({
  selector: 'app-movies-upcoming',
  templateUrl: './movies-upcoming.component.html',
  styleUrls: ['./movies-upcoming.component.css']
})

export class MoviesUpcomingComponent implements OnInit {
  upcoming;
  errorMessages;
  page = 1;
  previous = true;

  constructor (
    private _carouselService: CarouselService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.upcomingMovies();
  }

  upcomingMovies() {
    this._carouselService.featured()
    .subscribe(
        // res => console.log(res),
        res => { this.upcoming = res },
        error => this.errorMessages = <any> error
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -=1;
    this._carouselService.featuredPage(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.upcoming = res },
        error => this.errorMessages = <any> error
    );
  }

  next() {
    this.page +=1;
    this._carouselService.featuredPage(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.upcoming = res },
        error => this.errorMessages = <any> error
    );
    this.previous = false;
  }

}
