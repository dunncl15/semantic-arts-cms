export const pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [...state, action.page];
      break;
    case 'DELETE_PAGE':
      return state.filter(page => page.id !== action.id);
      break;
    case 'EDIT_PAGE':
      const index = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, index),
        {...action.page, id: action.page.id, content: action.page.content},
        ...state.slice(index + 1)
      ];
      break;
    case 'TOGGLE_PUBLISH':
      return [
        ...state.slice(0, action.index),
        {...action.page, published: !action.page.published},
        ...state.slice(action.index + 1)
      ];
      break;
    case 'TOGGLE_NAV':
      return [
        ...state.slice(0, action.index),
        {...action.page, navigation: !action.page.navigation},
        ...state.slice(action.index + 1)
      ];
      break;
    case 'TOGGLE_NAV_PUBLISH':
      return [
        ...state.slice(0, action.index),
        {...action.page, published: !action.page.published, navigation: !action.page.navigation},
        ...state.slice(action.index + 1)
      ];
      break;
    default:
      return state;
  }
};
