import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/getMovies';

export const store = createStore(reducer, applyMiddleware(thunk));
