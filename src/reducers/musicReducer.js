export const musicReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_MUSIC':
			return [ ...state, payload.music ];
		case 'REMOVE_MUSIC':
			return state.filter(music => payload.music.id !== music.id);
		default:
			return state;
	}
};
