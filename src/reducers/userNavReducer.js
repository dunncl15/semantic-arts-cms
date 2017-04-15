export const userNav = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_NAV':
      return [...state, action.title];
      break;
    case 'REMOVE_FROM_NAV':
      return state.filter(page => page.title !== action.title.title);
      break;
    default:
      return state;
  }
};
