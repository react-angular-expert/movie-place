import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from './../config/app.setting';
import { Carousel } from './../carousel/Carousel';

@Injectable()
export class CarouselService {
  private carouselUrl:string = './assets/api/carousel_items.json';

  constructor(private _http:Http ) { }

  featured(): Observable<Carousel[]> {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/upcoming' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .catch(this.handleError);
  }
  featuredPage(page): Observable<Carousel[]> {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/upcoming' + AppSettings.API_KEY  + '&page=' + page)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .catch(this.handleError);
  }

  playingNow() {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/popular' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
  }
  playingNowNext(page) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/popular' + AppSettings.API_KEY + '&page=' + page)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
  }

  topRated() {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/top_rated' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
  }
  topRatedPage(page) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/top_rated' + AppSettings.API_KEY  + '&page=' + page)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
  }


  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
    return Observable.throw(msg);
  }

}
