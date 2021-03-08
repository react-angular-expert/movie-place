import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarouselService } from './../shared/carousel.service';
import { Carousel } from './../carousel/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: any;
  errorMessages: string;

  constructor(
    private _carouselService: CarouselService,
    public _router: Router
  ) { }

  ngOnInit( ) {
    this.getSlides();
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

  getSlides() {
    this._carouselService.featured()
      .subscribe(
        // res => console.log(res),
        res => { this.slides = res },
        error => this.errorMessages = <any> error
    );
    // console.log(this.slides);
  }


}
