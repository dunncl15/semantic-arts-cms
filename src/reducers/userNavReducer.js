export const userNav = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_NAV':
      return [...state,
        {...action.page, published: !action.page.published, navigation: !action.page.navigation}
      ];
      break;
    case 'REMOVE_FROM_NAV':
      return state.filter(page => page.id !== action.page.id);
      break;
    default:
      return state;
  }
};
