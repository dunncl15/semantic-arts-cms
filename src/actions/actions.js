
export const addPage = (page) => {
  return {
    type: 'ADD_PAGE',
    page
  }
};

export const deletePage = (id) => {
  return {
    type: 'DELETE_PAGE',
    id
  }
}

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

export const removeFromNav = (page) => {
  return {
    type: 'REMOVE_FROM_NAV',
    page
  }
}

export const togglePublish = (page, index) => {
  return {
    type: 'TOGGLE_PUBLISH',
    page,
    index
  }
}

export const toggleNav = (page, index) => {
  return {
    type: 'TOGGLE_NAV',
    page,
    index
  }
}

export const toggleNavPublish = (page, index) => {
  return {
    type: 'TOGGLE_NAV_PUBLISH',
    page,
    index
  }
}
