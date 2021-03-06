import React from "react";
import { shallow } from "enzyme";
import { RecommendedMovies } from "./RecommendedMovies";
import { mountWrap } from "../test-helpers/ContextWrap";

describe("RecommendedMovies", () => {
  it('should render correctly in "debug" mode', () => {
    const moviesList = [
      {
        budget: 0,
        genres: ["Comedy"],
        id: 447365,
        overview: "The third film based on Marvel's Guardians of the Galaxy.",
        poster_path:
          "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        release_date: "2020-05-01",
        revenue: 0,
        runtime: null,
        tagline: "",
        title: "Guardians of the Galaxy Vol. 3",
        vote_average: 0,
        vote_count: 9
      }
    ];
    const wrappedMount = () => mountWrap(<RecommendedMovies moviesList={moviesList} />);
    expect(wrappedMount).toMatchSnapshot();
  });
});

describe("RecommendedMovies", () => {
  it("should get recommended movies on update", () => {
    const mockGetRecommendedMoviesfn = jest.fn();

    const props = {
      moviesList: [],
      getRecommendedMovies: mockGetRecommendedMoviesfn,
      genres: ["Comedy"]
    };
    const component = shallow(<RecommendedMovies {...props} />);
    component.setProps({ genres: ["Comedy", "Action"] });
    expect(mockGetRecommendedMoviesfn).toHaveBeenCalled();
  });
});
