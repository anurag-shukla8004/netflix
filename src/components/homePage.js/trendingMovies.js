import Carousel from 'react-elastic-carousel';
import React from 'react';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function trendingMovies() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Example to setup your carousel in react
      </h1>
      <div className="trendingContainer">
        <Carousel breakPoints={breakPoints}>
          <div className="trendingMoviesList">One</div>
          <div className="trendingMoviesList">Two</div>
          <div className="trendingMoviesList">Three</div>
          <div className="trendingMoviesList">Four</div>
          <div className="trendingMoviesList">Five</div>
          <div className="trendingMoviesList">Six</div>
          <div className="trendingMoviesList">Seven</div>
          <div className="trendingMoviesList">Eight</div>
        </Carousel>
      </div>
    </div>
  );
}

export default trendingMovies;
