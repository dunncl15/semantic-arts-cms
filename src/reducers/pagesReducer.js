
export const pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [...state, action.page];
      break;
    case 'EDIT_PAGE':
      const index = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, index),
        {...action.page},
        ...state.slice(index + 1)
      ];
      break;
    case 'TOGGLE_PUBLISH':
      const i = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, i),
        {...action.page, published: !action.page.published},
        ...state.slice(i + 1)
      ];
      break;
    default:
      return state;
  }
};
