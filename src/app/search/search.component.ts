import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../shared/search.service';
import { navService } from './../shared/nav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search;
  // searchResult;
  // errorMessages;
  // @Output() searchEmit = new EventEmitter();

  constructor(
    private _searchService: SearchService,
    public _router: Router,
    private _navService: navService
    ) {}

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.search);
    this._navService.changeNav(this.search);
    // .subscribe(
    //   res => { this.searchResult = res },
    //   error => this.errorMessages = <any> error
    // );
    this.search = "";
    this._router.navigate(['/search']);
  }

}

// https://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2
