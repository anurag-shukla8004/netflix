import Carousel from 'react-elastic-carousel';
import React from 'react';
import { connect } from 'react-redux';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];

function TrendingMovies({ MovieList }) {
  return (
    <div>
      <h1 style={{ textAlign: 'left' }}>Trending movies</h1>
      <div className="trendingContainer">
        <Carousel breakPoints={breakPoints}>
          {MovieList.map((movie, index) => (
            <div key={index} className="trendingMoviesList">
              <img className="trendingMoviesImg" src={movie.Poster} alt="" />
            </div>
          ))}
          {MovieList.map((movie, index) => (
            <div key={index} className="trendingMoviesList">
              <img className="trendingMoviesImg" src={movie.Poster} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  MovieList: state.trendingMovieArr,
});

export default connect(mapStateToProps, {})(TrendingMovies);
