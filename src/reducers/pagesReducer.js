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
    case 'EDIT_PUBLISHED':
      const ind = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, ind),
        {...action.page, published: true},
        ...state.slice(ind + 1)
      ];
      break;
    case 'EDIT_PUB_NAV':
      const x = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, x),
        {...action.page, published: true, navigation: true},
        ...state.slice(x + 1)
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
    case 'TOGGLE_NAV':
      const ix = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, ix),
        {...action.page, navigation: !action.page.navigation},
        ...state.slice(ix + 1)
      ];
      break;
    case 'TOGGLE_NAV_PUBLISH':
      const idx = state.findIndex(page => page.title === action.page.title);
      return [
        ...state.slice(0, idx),
        {...action.page, published: !action.page.published, navigation: !action.page.navigation},
        ...state.slice(idx + 1)
      ];
      break;
    default:
      return state;
  }
};
