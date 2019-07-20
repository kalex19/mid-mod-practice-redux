import { favoritesReducer } from './favoriteReducer';
import { musicReducer } from './musicReducer';
import * as actions from '../actions';

describe('reducers', () => {
	describe('musicReducer', () => {
		const mockMusic = [
			{ artist: 'Frank', song: 'Sing to me', id: 1 },
			{ artist: 'Sinatra', song: 'All night long', id: 2 },
			{ artist: 'Brittany', song: 'Toxic', id: 3 }
		];
		it('should return the initial state', () => {
			//setup
			const expected = [];
			//execution
			const result = musicReducer(undefined, {});
			//expectation
			expect(result).toEqual(expected);
		});
		it('should return state with a new artist added from ADD_MUSIC action ', () => {
			//setup
			const newMusic = {
				artist: 'Brittany',
				song: 'Toxic',
				id: 3
			};
			//execution
			const result = musicReducer(mockMusic, actions.addMusic(newMusic));
			//expectation
			expect(result).toEqual([ ...mockMusic, newMusic ]);
		});
		it('should return state with an artist removed by REMOVE_MUSIC action', () => {
			//setup
			const expected = music.filter(song => song.id !== 2);
			//execution
			const result = musicReducer(mockMusic, actions.removeMusic(2));
			//expectation
			expect(result).toEqual(expected);
		});
		it('should return state if there is no matching action', () => {
			//setup
			const defaultAction = { type: 'DEFAULT_ACTION' };
			//execution
			const result = musicReducer(mockMusic, defaultAction);
			//expectation
			expect(result).toEqual(mockMusic);
		});
	});
	describe('favoriteReducer', () => {
		let mockFavorite = false;
		it('should return the initial state', () => {
			//execution
			const result = favoritesReducer(undefined, {});
			//expectation
			expect(result).toEqual(mockFavorite);
		});
		it('should toggle the favorites status with an action of TOGGLE_FAVORITE', () => {
			//setup
			const expected = (mockFavorite = !mockFavorite);
			//execution
			const result = favoritesReducer(mockFavorite);
			//expectation
			expect(result).toEqual(expected);
		});
		it('should return state if there is no matching action', () => {
			//setup
			const defaultAction = { type: 'DEFAULT_ACTION' };
			//execution
			const result = favoritesReducer(mockFavorite, defaultAction);
			//expectation
			expect(result).toEqual(mockFavorite);
		});
	});
});
