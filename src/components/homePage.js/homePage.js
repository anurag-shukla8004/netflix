import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrendingMovies from './trendingMovies';
import styled from 'styled-components';
import MovieComponent from './moviecomponent';
import { getMovieApiCall } from '../../action/action';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { movieDetails } from '../../action/action';
export const API_KEY = '6a2d8bb';

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MovieImg = styled.img`
  width: 35%;

  margin: 10px;
  margin-right: 0px;
`;

const SearchImg = styled.img`
  width: 35px;
  height: 30px;
`;
const SearchInput = styled.input`
  width: 230px;
  height: 30px;
  color: black;
  font-size: 14px;
  font-weight: 500;
  margin-left: 0px;
  border: none;
  outline: none;
  margin-left: 7px;

  overflow: hidden;
  align-items: center;
  border-radius: 5px;
`;

function HomePage({ MovieList, getMovieApiCall, movieDetails }) {
  const [searchQuery, updateSearchQuery] = useState('');
  const [time, updatetime] = useState();
  const [profileShow, setProfileShow] = useState(false);
  let profileSinCheck = false;
  let data = '';

  const navigator = useNavigate();

  const onClickHandler = (movie) => {
    movieDetails(movie);
    navigator('/MovieDetails');
  };

  if (localStorage.getItem('data')) {
    profileSinCheck = true;
    data = JSON.parse(localStorage.getItem('data'));
  }

  useEffect(() => {
    getMovieApiCall();
  }, []); // eslint-disable-next-line

  const fetchData = async (searchString) => {
    getMovieApiCall(searchString, true);
  };

  const onTextChange = (event) => {
    clearTimeout(time);
    updateSearchQuery(event.target.value);
    const Timeout = setTimeout(() => {
      fetchData(event.target.value);
    }, 100);
    updatetime(Timeout);
  };

  return (
    <>
      <Container>
        <div className="searchbox">
          <Appname>
            <div style={{ color: 'red' }}>EC</div>Flix Movies
          </Appname>
          <div className="imgInputAccountContainer">
            <div className="imgInputContainer">
              <i
                class="fa fa-search"
                style={{ color: '#E63E33' }}
                aria-hidden="true"
              ></i>
              <SearchInput
                placeholder="Search Movies"
                value={searchQuery}
                onChange={onTextChange}
              />
            </div>

            <div className="Account">
              <div>
                {profileSinCheck ? (
                  <div className="profileContainer">
                    <h5
                      onClick={() => {
                        setProfileShow(true);
                      }}
                    >
                      <i
                        class="fa fa-user-circle fa-2x"
                        style={{ color: '#E63E33' }}
                        aria-hidden="true"
                      ></i>
                    </h5>
                  </div>
                ) : (
                  <Link to="/SinInPage">
                    <div className="btn">
                      <button className="sinButton" type="submit">
                        Sign In
                      </button>
                    </div>
                  </Link>
                )}
              </div>
              <div
                className="AccountDetailsContainer"
                style={profileShow ? { display: 'flex' } : { display: 'none' }}
              >
                <img
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt=""
                  style={{ width: '20%' }}
                />
                <p
                  style={{
                    color: 'red',
                    position: 'absolute',
                    right: '14px',
                    top: '-14px',
                  }}
                  onClick={() => {
                    setProfileShow(false);
                  }}
                >
                  X
                </p>

                <h5 style={{ color: 'indianred' }} className="AccountDetails">
                  {data.Name}
                </h5>
                <h5 className="AccountDetails">{data.Email}</h5>
                <h5 className="AccountDetails">+91 {data.Number}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="welcomeContainer">
          {!profileSinCheck ? (
            <h1 className="welocomeHello">Hello </h1>
          ) : (
            <h1 className="welcomeHello">Hello {data.Name}</h1>
          )}
        </div>
        <MovieListContainer className="ijZktC ">
          <TrendingMovies />

          {MovieList?.length ? (
            MovieList.map((movie, index) => (
              <span onClick={() => onClickHandler(movie)} key={index}>
                <MovieComponent movie={movie} />
              </span>
            ))
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                style={{ height: '105px' }}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58c61f47-aa9c-4ed6-a0bc-cddac050cfc8/d7fhxtl-198c37c7-d2ab-4177-b024-69a015df0973.jpg/v1/fill/w_800,h_280,q_75,strp/cute_avengers_by_acberdec_d7fhxtl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4YzYxZjQ3LWFhOWMtNGVkNi1hMGJjLWNkZGFjMDUwY2ZjOFwvZDdmaHh0bC0xOThjMzdjNy1kMmFiLTQxNzctYjAyNC02OWEwMTVkZjA5NzMuanBnIiwiaGVpZ2h0IjoiPD0yODAiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzU4YzYxZjQ3LWFhOWMtNGVkNi1hMGJjLWNkZGFjMDUwY2ZjOFwvYWNiZXJkZWMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.15mZbq3f83ZFwxsPa3voh7mDw2-AJljXlapgJkQNRzg"
              />

              <h3 style={{ color: '#fff' }}>Film Not Found 404</h3>
            </div>
          )}
        </MovieListContainer>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  MovieList: state.moviesArr,
});

export default connect(mapStateToProps, { getMovieApiCall, movieDetails })(
  HomePage
);
