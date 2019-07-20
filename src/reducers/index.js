import { combineReducers } from 'react-redux';
import { musicReducer } from './musicReducer';
import { favoritesReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
	music: musicReducer,
	favorites: favoritesReducer
});
