import { pages } from '../../reducers/pagesReducer';

const initialState = [];
const page = {
  id: 1,
  title: 'hello',
  content: 'ughhhhhhh',
  navigation: false,
  published: false
}
const editedPage = {
  id: 2,
  title: 'hello',
  content: 'why thoooooo',
  navigation: false,
  published: false
};
const publishedPage = {
  id: 1,
  title: 'hello',
  content: 'ughhhhhhh',
  navigation: false,
  published: true
};
const navPage = {
  id: 1,
  title: 'hello',
  content: 'ughhhhhhh',
  navigation: true,
  published: false
};
const navPubPage = {
  id: 1,
  title: 'hello',
  content: 'ughhhhhhh',
  navigation: true,
  published: true
};

describe('pages reducer', () => {

  it('should return initialState by default', () => {
    expect(pages(undefined, {})).toEqual(initialState);
  });

  it('ADD_PAGE', () => {
    const pagesArray = [page];
    const action = { type: 'ADD_PAGE', page: page };

    expect(pages(initialState, action)).toEqual(pagesArray)
  });

  it('DELETE_PAGE', () => {
    const state = [page];
    const action = { type: 'DELETE_PAGE', id: 1 };

    expect(pages(state, action)).toEqual([]);
  })

  it('EDIT_PAGE', () => {
    const state = [page];
    const newState = [editedPage];
    const action = { type: 'EDIT_PAGE', page: editedPage };

    expect(pages(state, action)).toEqual(newState);
  });

  it('TOGGLE_PUBLISH', () => {
    const state = [page];
    const newState = [publishedPage];
    const action = { type: 'TOGGLE_PUBLISH', page: page, index: 0 };

    expect(pages(state, action)).toEqual(newState);
  });

  it('TOGGLE_NAV', () => {
    const state = [page];
    const newState = [navPage];
    const action = { type: 'TOGGLE_NAV', page: page, index: 0 };

    expect(pages(state, action)).toEqual(newState);
  });

  it('TOGGLE_NAV_PUBLISH', () => {
    const state = [page];
    const newState = [navPubPage];
    const action = { type: 'TOGGLE_NAV_PUBLISH', page: page, index: 0 };

    expect(pages(state, action)).toEqual(newState);
  })
})
