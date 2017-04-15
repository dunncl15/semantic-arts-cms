
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

export const addToNav = (title) => {
  return {
    type: 'ADD_TO_NAV',
    title
  }
}

export const removeFromNav = (title) => {
  return {
    type: 'REMOVE_FROM_NAV',
    title
  }
}

export const togglePublish = (page) => {
  return {
    type: 'TOGGLE_PUBLISH',
    page
  }
}

export const toggleNav = (page) => {
  return {
    type: 'TOGGLE_NAV',
    page
  }
}

export const toggleNavPublish = (page) => {
  return {
    type: 'TOGGLE_NAV_PUBLISH',
    page
  }
}
