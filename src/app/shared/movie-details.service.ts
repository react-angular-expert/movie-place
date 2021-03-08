import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from './../config/app.setting';

@Injectable()
export class MovieDetailsService {

  constructor( private _http:Http ) { }

  getMovieDetails(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/' + id + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data;
            })
            .catch(this.handleError);
  }

  getMovieTrailer(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/videos' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .catch(this.handleError);
  }

  getMovieCast(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/credits' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.cast;
            })
            .catch(this.handleError);
  }

  getMovieCrew(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/credits' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.crew;
            })
            .catch(this.handleError);
  }

  getPersonData(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'person/' + id  + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .catch(this.handleError);
  }

  getReview(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'movie/' + id + '/reviews' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            .catch(this.handleError);
  }

  getPersonDetails(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'person/' + id + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data;
            })
            //.do(data => console.log(data))
            .catch(this.handleError);
  }

  getPersonMovies(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'person/' + id + '/movie_credits' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data;
            })
            //.do(data => console.log(data))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
    return Observable.throw(msg);
  }

}
