import axios from 'axios';

// action type
export const GET_MOVEIS_REQUEST = 'GET_MOVEIS_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILER = 'GET_MOVIES_FAILER';
export const GET_TRENDING_MOVEIS_REQUEST = 'GET_TRENDING_MOVEIS_REQUEST';
export const GET_TRENDING_MOVIES_SUCCESS = 'GET_TRENDING_MOVIES_SUCCESS';
export const GET_TRENDING_MOVIES_FAILER = 'GET_TRENDING_MOVIES_FAILER';

export const getMovieApiCall = (searchName, bool) => (dispatch) => {
  dispatch(getMovieRequest());
  dispatch(getTrendingMovieRequest());

  if (bool) {
    axios
      .get(`https://www.omdbapi.com/?s=${searchName}&apikey=6a2d8bb`)
      .then((res) => {
        dispatch(getMovieSuccess(res.data.Search));
      })
      .catch((err) => {
        dispatch(getMovieFailer(err));
      });
  }

  axios
    .get('https://www.omdbapi.com/?s=man&apikey=6a2d8bb')
    .then((res) => {
      dispatch(getMovieSuccess(res.data.Search));
      dispatch(getTrendingMovieSuccess(res.data.Search));
    })
    .catch((err) => {
      dispatch(getTrendingMovieFailer(err));
      dispatch(getMovieFailer(err));
    });
};

export const getMovieRequest = () => {
  return {
    type: GET_MOVEIS_REQUEST,
  };
};

export const getMovieSuccess = (payload) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload,
  };
};

export const getMovieFailer = (payload) => {
  return {
    type: GET_MOVIES_FAILER,
    payload,
  };
};

export const getTrendingMovieRequest = () => {
  return {
    type: GET_TRENDING_MOVEIS_REQUEST,
  };
};

export const getTrendingMovieSuccess = (payload) => {
  return {
    type: GET_TRENDING_MOVIES_SUCCESS,
    payload,
  };
};

export const getTrendingMovieFailer = (payload) => {
  return {
    type: GET_TRENDING_MOVIES_FAILER,
    payload,
  };
};
