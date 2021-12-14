import { GET_MOVEIS_REQUEST } from '../action/action';
import { GET_MOVIES_SUCCESS } from '../action/action';
import { GET_MOVIES_FAILER } from '../action/action';
import { GET_TRENDING_MOVEIS_REQUEST } from '../action/action';
import { GET_TRENDING_MOVIES_SUCCESS } from '../action/action';
import { GET_TRENDING_MOVIES_FAILER, SEND_DETAILS } from '../action/action';

const incitialState = {
  isLoading: false,
  moviesArr: [],
  trendingMovieArr: [],
  movieDetails: {},
};

export const reducer = (state = incitialState, action) => {
  switch (action.type) {
    case GET_MOVEIS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesArr: action.payload,
      };
    case GET_MOVIES_FAILER:
      return {
        ...state,
        isLoading: false,
      };
    case GET_TRENDING_MOVEIS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trendingMovieArr: action.payload,
      };
    case GET_TRENDING_MOVIES_FAILER:
      return {
        ...state,
        isLoading: false,
      };

    case SEND_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };

    default:
      return state;
  }
};
