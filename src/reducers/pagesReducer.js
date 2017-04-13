
export const pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [...state, action.page];
      break;
    case 'EDIT_PAGE':
      const index = state.findIndex(page => page.title === action.page.title);
      const editedPage = Object.assign({}, action.page)
      return [
        ...state.slice(0, index),
        editedPage,
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};
