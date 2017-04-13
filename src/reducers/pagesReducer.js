
export const pages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return [...state, action.page];
      break;
    default:
      return state;
  }
};
