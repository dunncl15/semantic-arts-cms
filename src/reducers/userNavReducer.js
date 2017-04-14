export const userNav = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_NAV':
      console.log(action.page);
      // const newPage = Object.assign({}, title: action.page.title, published: action.page.published)
      return [...state, action.page];
      break;
    default:
      return state;
  }
};
