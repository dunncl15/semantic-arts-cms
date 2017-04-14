export const userNav = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_NAV':
      return [...state, action.page];
      break;
    default:
      return state;
  }
};
