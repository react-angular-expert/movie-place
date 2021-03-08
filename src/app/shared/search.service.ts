import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from './../config/app.setting';

@Injectable()
export class SearchService {
  private searchString;

  constructor(
    private _jsonp: Jsonp
  ) {}

  search(search) {
    return this._jsonp
            .request(AppSettings.API_ENDPOINT+ 'search/movie' + AppSettings.API_KEY + '&query=' + search + '&callback=JSONP_CALLBACK')
            .map((res: Response) => {
              const data = res.json().results;
              return data;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
    return Observable.throw(msg);
  }

}
