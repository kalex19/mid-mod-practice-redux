export const favoritesReducer = (state = false, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'TOGGLE_FAVORITE':
      return payload.favorite = !payload.favorite;
    default:
      return state
  }
}