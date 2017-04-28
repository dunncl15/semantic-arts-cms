import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/actions.js';

const store = configureMockStore()();
const mockPage = {
  id: 1,
  title: 'hello',
  content: '<p>adfadsf</p>',
  navigation: false,
  published: false
}

const mockIndex = 1;

describe('Actions', () => {

  afterEach(() => store.clearActions());

  it('ADD_PAGE', () => {
    let expectedAction = { type: 'ADD_PAGE', page: mockPage }

    store.dispatch(actions.addPage(mockPage));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('DELETE_PAGE', () => {
    let addAction = { type: 'ADD_PAGE', page: mockPage }
    let deleteAction = { type: 'DELETE_PAGE', id: mockPage }

    store.dispatch(actions.addPage(mockPage));
    store.dispatch(actions.deletePage(mockPage));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(2);
    expect(createdActions[1]).toEqual(deleteAction);

  });

  it('EDIT_PAGE', () => {
    let addAction = { type: 'ADD_PAGE', page: mockPage }
    let editAction = { type: 'EDIT_PAGE', page: mockPage }

    store.dispatch(actions.addPage(mockPage));
    store.dispatch(actions.editPage(mockPage));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(2);
    expect(createdActions[1]).toEqual(editAction);
  });

  it('TOGGLE_PUBLISH', () => {
    let togglePublishAction = { type: 'TOGGLE_PUBLISH', page: mockPage, index: mockIndex }

    store.dispatch(actions.togglePublish(mockPage, mockIndex));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(togglePublishAction);
  });

  it('TOGGLE_NAV', () => {
    let toggleNavAction = { type: 'TOGGLE_NAV', page: mockPage, index: mockIndex }

    store.dispatch(actions.toggleNav(mockPage, mockIndex));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(toggleNavAction);
  });

  it('TOGGLE_NAV_PUBLISH', () => {
    let toggleNavPublishAction = { type: 'TOGGLE_NAV_PUBLISH', page: mockPage, index: mockIndex }

    store.dispatch(actions.toggleNavPublish(mockPage, mockIndex));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(toggleNavPublishAction);
  });
});
