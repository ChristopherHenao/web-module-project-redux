import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'

export const rootReducer = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
})