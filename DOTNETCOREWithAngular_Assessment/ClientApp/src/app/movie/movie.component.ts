import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movies[];
  public filteredMovies: Movies[];
  searchText;
  http: HttpClient;
  Baseurl: string;
  selectedName;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.Baseurl = baseUrl;
    this.getMovies(undefined, null);
  }

  locations: any = ['BANGALORE', 'DELHI', 'PUNE', 'CHENNAI']
  languages: any = ['ENGLISH', 'HINDI']

  getMovies(e, filter) {
    this.http.get<Movies[]>(this.Baseurl + 'movie').subscribe(result => {
      this.movies = result;
      if (e != undefined && filter == 'location')
        this.movies = this.movies.filter(x => x.location == e.target.value);
      else if (e != undefined && filter == 'language')
        this.movies = this.movies.filter(x => x.language == e.target.value);
    }, error => console.error(error));
  }

  changeLocation(e) {
    this.getMovies(e, 'location');
  }

  changeLanguage(e) {
    this.getMovies(e, 'language');
  }

  sort(colName) {
    this.movies.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
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
