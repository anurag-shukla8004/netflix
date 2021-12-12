import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TrendingMovies from './trendingMovies';

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
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 5px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;

  background-color: #333;
  align-items: center;
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
  margin-left: 15px;
  width: -webkit-fill-avalable;
  overflow: hidden;
  align-items: center;
`;

function homePage() {
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
                style={{ marginLeft: '0px' }}
                placeholder="Search Movies"
              />
            </div>

            <div className="Account">
              <div>
                {/* <Link to="/SinInPage">
                  <h5>Account</h5>
                </Link> */}
                <Link to="/SinInPage">
                  <div className="btn">
                    <button className="sinButton" type="submit">
                      Sign In
                    </button>
                  </div>
                </Link>
              </div>
              <div className="AccountDetailsContainer">
                <img
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt=""
                  style={{ width: '20%' }}
                />

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
        </MovieListContainer>
      </Container>
    </>
  );
}

export default homePage;
