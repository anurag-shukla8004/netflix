import Carousel from 'react-elastic-carousel';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { movieDetails } from '../../action/action';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];

function TrendingMovies({ MovieList, movieDetails }) {
  const navigator = useNavigate();

  const onClickHandler = (movie) => {
    movieDetails(movie);
    navigator('/MovieDetails');
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 'revert',
          fontWeight: 'normal',
          color: '#f51919e0',
          marginBottom: '30px',
        }}
      >
        Trending movies
      </h1>
      <div className="trendingContainer">
        <Carousel breakPoints={breakPoints}>
          {MovieList.map((movie, index) => (
            <div
              key={index}
              className="trendingMoviesList"
              onClick={() => onClickHandler(movie)}
            >
              <img className="trendingMoviesImg" src={movie.Poster} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 'revert',
          fontWeight: 'normal',
          color: '#f51919e0',
          marginBottom: '15px',
          marginTop: '30px',
        }}
      >
        Searched movies
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  MovieList: state.trendingMovieArr,
});

export default connect(mapStateToProps, { movieDetails })(TrendingMovies);
