import { userNav } from '../../reducers/userNavReducer';

const initialState = [];
const page = {
  id: 1,
  title: 'hmmm',
  content: 'asdfasfasd',
  navigation: false,
  published: false
}
const navPubPage = {
  id: 1,
  title: 'hmmm',
  content: 'asdfasfasd',
  navigation: true,
  published: true
}

describe('user nav reducer', () => {

  it('should return initialState by default', () => {
    expect(userNav(undefined, {})).toEqual(initialState);
  });

  it('ADD_TO_NAV', () => {
    const newState = [navPubPage];
    const action = { type: 'ADD_TO_NAV', page: page };

    expect(userNav(initialState, action)).toEqual(newState)
  });

  it('REMOVE_FROM_NAV', () => {
    const state = [navPubPage];
    const action = { type: 'REMOVE_FROM_NAV', page: page };

    expect(userNav(state, action)).toEqual(initialState)
  });
});
