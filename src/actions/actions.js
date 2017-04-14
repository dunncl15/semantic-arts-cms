
export const addPage = (page) => {
  return {
    type: 'ADD_PAGE',
    page
  }
};

export const editPage = (page) => {
  return {
    type: 'EDIT_PAGE',
    page
  }
}

export const addToNav = (page) => {
  return {
    type: 'ADD_TO_NAV',
    page
  }
}
