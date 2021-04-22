import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html'
})
export class MovieDetailsComponent {
  public movies: Movies[];
  private title: string;
  imdbID: string;
  private sub: any;
  selectedMovie: Movies;
  http: HttpClient;
  BaseUrl: string;
  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL',) baseUrl: string) {
    http.get<Movies[]>(baseUrl + 'movie').subscribe(result => {
      this.movies = result;
      this.selectedMovie = this.movies.find(x => x.imdbID == this.imdbID);
    }, error => console.error(error));

    this.sub = this.route.params.subscribe(params => {
      this.imdbID = params['imdbID']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

}

interface Movies {
  language: string;
  location: string;
  plot: string;
  poster: string;
  soundEffects: string[];
  stills: string[];
  title: string;
  imdbID: string;
  listingType: string;
  imdbRating: string;
}
