export const userNav = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_NAV':
      console.log('clicked!');
      return [...state, action.pageName];
      break;
    default:
      return state;
  }
};
