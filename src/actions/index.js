export const addMusic = (music) => {
  type: 'ADD_MUSIC';
  payload: {
    music
  }
};

export const removeMusic = (id) => {
  type: 'REMOVE_MUSIC';
  payload: {
    id
  }
};

export const toggleFavorite = (favorite) => {
  type: 'TOGGLE_FAVORITE';
  payload: {
    favorite
  }
};