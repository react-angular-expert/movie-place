import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from './../shared/carousel.service';

@Component({
  selector: 'app-movies-top',
  templateUrl: './movies-top.component.html',
  styleUrls: ['./movies-top.component.css']
})

export class MoviesTopComponent implements OnInit {
  topRated;
  errorMessages;
  page = 1;
  previous = true;

  constructor (
    private _carouselService: CarouselService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.top();
  }

  top() {
    this._carouselService.topRated()
    .subscribe(
        // res => console.log(res),
        res => { this.topRated = res },
        error => this.errorMessages = <any> error
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -=1;
    this._carouselService.topRatedPage(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.topRated = res },
        error => this.errorMessages = <any> error
    );
  }

  next() {
    this.page +=1;
    this._carouselService.topRatedPage(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.topRated = res },
        error => this.errorMessages = <any> error
    );
    this.previous = false;
  }


}
