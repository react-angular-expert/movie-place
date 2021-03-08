import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieDetailsService } from './../shared/movie-details.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.scss']
})

export class CastDetailsComponent implements OnInit {
  id;
  cast;
  projects;
  errorMessages;

  constructor(
    public _movieDetailsService: MovieDetailsService,
    public _router: Router,
    public _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.castData();
    this.castProjects();
  }

  castData() {
    this._movieDetailsService.getPersonDetails(this.id)
    .subscribe(
      res => { this.cast = res },
      error => this.errorMessages = <any> error,
      () => console.log(this.cast)
    );
  }

  castProjects() {
    this._movieDetailsService.getPersonMovies(this.id)
    .subscribe(
      res => { this.projects = res },
      error => this.errorMessages = <any> error,
      () => console.log(this.projects )
    );
  }

  onDetails(id) {
    this._router.navigate(['/movie/' + id]);
  }

}
