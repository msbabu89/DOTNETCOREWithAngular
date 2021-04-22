import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie.component';
import { resolveAny } from 'dns';

describe('MovieComponent', () => {
  
  let fixture: ComponentFixture<MovieComponent>;
  let client: HttpClient;
  let component: MovieComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MovieComponent, { provide: 'BASE_URL', useValue: 'http://localhost:9876/' }]
      
    })
      .compileComponents();
    component = TestBed.get(MovieComponent);
  }));

  it('Verify the count of Movies', () => {
    expect(component.movies).isNot(null);
  });

});
