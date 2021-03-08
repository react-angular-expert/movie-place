import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class navService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<string>(null);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(query: string) {
    this._navItemSource.next(query);
  }
}
