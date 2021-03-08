import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from './../config/app.setting';

@Injectable()
export class GenreService {

  constructor(private _http: Http) { }

  getGenre() {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'genre/movie/list' + AppSettings.API_KEY)
            .map((res: Response) => {
              const data = res.json();
              return data.genres;
            })
            // .do(data => console.log(data))
            .catch(this.handleError);
  }

  genreList(id) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'genre/' + id + '/movies' + AppSettings.API_KEY + '&sort_by=created_at.asc')
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            // .do(data => console.log(data))
            .catch(this.handleError);
  }
  genreListNext(id, page) {
    return this._http
            .get(AppSettings.API_ENDPOINT + 'genre/' + id + '/movies' + AppSettings.API_KEY + '&sort_by=created_at.asc' + '&page=' + page)
            .map((res: Response) => {
              const data = res.json();
              return data.results;
            })
            // .do(data => console.log(data))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
    return Observable.throw(msg);
  }

}
