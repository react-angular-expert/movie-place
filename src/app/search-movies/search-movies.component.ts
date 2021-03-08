import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { SearchService } from './../shared/search.service';
import { navService } from './../shared/nav.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {
  search;
  subscription;
  searchResult;
  errorMessages;
  display: boolean = false;

  constructor(
    private _searchService: SearchService,
    public _router: Router,
    private _navService: navService
    ) {}

  ngOnInit() {
    this.subscription = this._navService.navItem$
      .subscribe(res => { this.search = res });
    if(this.search) {
      this.onSubmit();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    // console.log(this.search);
    this._searchService.search(this.search)
    .subscribe(
      res => { this.searchResult = res },
      error => this.errorMessages = <any> error
    );
    this.display = true;
    this.search = "";
  }

}
