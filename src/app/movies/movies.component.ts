import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from './../shared/carousel.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  latest;
  errorMessages: string;
  page = 1;
  previous = true;
  rating;
  classes = "";

  constructor (
    private _carouselService: CarouselService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.popular();
  }

  popular() {
    this._carouselService.playingNow()
    .subscribe(
        // res => console.log(res),
        res => { this.latest = res },
        error => this.errorMessages = <any> error
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  prev() {
    this.page -=1;
    this._carouselService.playingNowNext(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.latest = res },
        error => this.errorMessages = <any> error
    );
  }

  next() {
    this.page +=1;
    this._carouselService.playingNowNext(this.page)
    .subscribe(
        // res => console.log(res),
        res => { this.latest = res },
        error => this.errorMessages = <any> error
    );
    this.previous = false;
  }

  // checkRating() {
  //   if(this.rating < 20) {
  //     this.classes = "danger";
  //   } else if(this.rating < 40) {
  //     this.classes = "warning";
  //   } else if(this.rating < 80) {
  //     this.classes = "info";
  //   } else {
  //     this.classes = "success";
  //   }
  // }

}
