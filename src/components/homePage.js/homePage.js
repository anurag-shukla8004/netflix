import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrendingMovies from './trendingMovies';
import styled from 'styled-components';
import MovieComponent from './moviecomponent';
import { getMovieApiCall } from '../../action/action';
import { connect } from 'react-redux';
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
// const SearchBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 5px 5px;
//   background-color: white;
//   border-radius: 6px;
//   margin-left: 20px;

//   background-color: #333;
//   align-items: center;
// `;

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
  margin-left: 15px;
  width: -webkit-fill-avalable;
  overflow: hidden;
  align-items: center;
`;

function HomePage({ MovieList, getMovieApiCall }) {
  const [searchQuery, updateSearchQuery] = useState('');
  const [time, updatetime] = useState();
  const [profileShow, setProfileShow] = useState(false);

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
            <MovieImg src="https://i.ibb.co/r5krrdz/logo.png" />
          </Appname>
          <div className="imgInputAccountContainer">
            <div className="imgInputContainer">
              <SearchImg src="https://www.pngitem.com/pimgs/m/559-5590045_search-magnifier-search-icon-no-background-hd-png.png" />
              <SearchInput
                placeholder="Search Movies"
                value={searchQuery}
                onChange={onTextChange}
              />
            </div>

            <div className="Account">
              <div>
                <h5
                  onClick={() => {
                    setProfileShow(true);
                  }}
                >
                  Account
                </h5>

                <Link to="/SinInPage">
                  <div className="btn">
                    <button className="sinButton" type="submit">
                      Sign In
                    </button>
                  </div>
                </Link>
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
                  Anurag shukla
                </h5>
                <h5 className="AccountDetails">
                  Anuragshukla8004@gmail.comadfadfasdfas
                </h5>
                <h5 className="AccountDetails">+91 6387281864</h5>
              </div>
            </div>
          </div>
        </div>
        <MovieListContainer className="ijZktC ">
          <TrendingMovies />
          {MovieList?.length ? (
            MovieList.map((movie, index) => (
              <MovieComponent key={index} movie={movie} />
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

export default connect(mapStateToProps, { getMovieApiCall })(HomePage);
