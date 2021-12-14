import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function movieDetails({ movie }) {
  return (
    <div>
      <Link to="/">
        <div className="logo" style={{ height: '12px' }}>
          <div
            style={{
              color: 'red',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              position: 'relative',
              top: '18px',
              left: '16px',
              width: 'fit-content',
            }}
          >
            EC<span style={{ color: '#fff' }}>Flix Movies</span>
          </div>
        </div>
      </Link>

      <div class="container" style={{ maxWidth: '100%' }}>
        <div class="cellphone-container" style={{ height: '100vh' }}>
          <div class="movie">
            <div
              class="movie-img"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            ></div>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="col1">
                  <h1>{movie.Title}</h1>
                  <ul class="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid summary-row">
                <div class="col2">
                  <h5>{movie.Year}</h5>
                </div>
                <div class="col2">
                  <ul class="movie-likes">
                    <li>
                      <i class="material-icons">&#xE813;</i>124
                    </li>
                    <li>
                      <i class="material-icons">&#xE813;</i>3
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="movie-description">
                    A group of elderly people are giving interviews about having
                    lived in a climate of crop blight and constant dust
                    reminiscent of The Great Depression of the 1930's. The first
                    one seen is an elderly woman stating her father was a
                    farmer, but did not start out that way.{' '}
                  </p>
                </div>
              </div>
              <div class="mr-grid actors-row">
                <div class="col1">
                  <p class="movie-actors">{movie.Type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movie: state.movieDetails,
});

export default connect(mapStateToProps, {})(movieDetails);
