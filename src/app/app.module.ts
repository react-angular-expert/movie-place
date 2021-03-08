import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import './shared/rxjs.extension';
import { CarouselService } from './shared/carousel.service';
import { SearchService } from './shared/search.service';
import { GenreService } from './shared/genre.service';
import { MovieDetailsService } from './shared/movie-details.service';
import { navService } from './shared/nav.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturedComponent } from './featured/featured.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ProgressComponent } from './progress/progress.component';
import { GenreShowComponent } from './genre-show/genre-show.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CastComponent } from './cast/cast.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesTopComponent } from './movies-top/movies-top.component';
import { MoviesUpcomingComponent } from './movies-upcoming/movies-upcoming.component';
import { CastDetailsComponent } from './cast-details/cast-details.component'

const appRoutes:Routes = [
  { path:'', component: HomeComponent },
  { path:'search', component: SearchMoviesComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'genre/:id', component: GenreShowComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastDetailsComponent },
  { path: 'movies/popular', component: MoviesComponent},
  { path: 'movies/top', component: MoviesTopComponent},
  { path: 'movies/upcoming', component: MoviesUpcomingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    FeaturedComponent,
    SearchResultComponent,
    SearchMoviesComponent,
    ProgressComponent,
    GenreShowComponent,
    MovieDetailsComponent,
    CastComponent,
    MoviesComponent,
    MoviesTopComponent,
    MoviesUpcomingComponent,
    CastDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoundProgressModule,
    JsonpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CarouselService,
    SearchService,
    GenreService,
    navService,
    MovieDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
