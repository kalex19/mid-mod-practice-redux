import * as actions from './index';

describe('actions', () => {
  it('should have a type of ADD_MUSIC and a payload of new music', () => {
    //setup
    const music = [{
      artist: 'Frank',
      song: 'Sing to me',
      id: 1
    }, {
      artist: 'Sinatra',
      song: 'All night long',
      id: 2
    }];
    const expectedAction = {
      type: 'ADD_MUSIC',
      payload: {
        music: [{
          artist: 'Frank',
          song: 'Sing to me',
          id: 1
        }, {
          artist: 'Sinatra',
          song: 'All night long',
          id: 2
        }]
      }
    }
    //execution
    const result = actions.addMusic(music)
    //expectation
    expect(result).toEqual(expectedAction)
  });
  it('should have a type of REMOVE_MUSIC and a payload of an id', () => {
    //setup
    const expectedAction = {
      type: 'REMOVE_MUSIC',
      payload: {
        id: 2
      }
    }
    //execution
    const result = actions.removeMusic(2)
    //expectation
    expect(result).toEqual(expectedAction)
  });
  it('should have a type of TOGGLE_FAVORITE', () => {
    //setup
    const favorite = true
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      payload: {
        favorite: true
      }
    }
    //execution
    const result = actions.toggleFavorite(favorite)
    //expectation
    expect(result).toEqual(expectedAction)
  });
})