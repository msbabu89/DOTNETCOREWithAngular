"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var movie_component_1 = require("./movie.component");
describe('MovieComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpClientModule],
            providers: [movie_component_1.MovieComponent],
        })
            .compileComponents();
    }));
    it('Verify the count of Movies', function () {
        component = testing_1.TestBed.get(movie_component_1.MovieComponent);
        //expect(component.movies.length).toBe(10)
    });
});
//# sourceMappingURL=movie.component.spec.js.map