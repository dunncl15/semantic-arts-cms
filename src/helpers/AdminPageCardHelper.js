export const handleNav = ({ userNav, addToNav, removeFromNav,
                            togglePublish, toggleNav, toggleNavPublish,
                            title, content, id, published, navigation, i }) => {

  const index = userNav.findIndex(page => page.id === id);

  if (index === -1 && !published) {
    addToNav({ title, content, id, published, navigation })
    toggleNavPublish({ title, content, id, published, navigation }, i);
  }
  if (index === -1 && published) {
    addToNav({ title, content, id, published, navigation })
    toggleNav({ title, content, id, published, navigation }, i)
  }
  if (index !== -1 && published) {
    removeFromNav({ title, content, id, published, navigation })
    toggleNavPublish({ title, content, id, published, navigation }, i);
  }
}

export const handlePublish = ({ userNav, removeFromNav, togglePublish,
                                toggleNavPublish, title, content,
                                id, published, navigation, i }) => {

  const index = userNav.findIndex(page => page.id === id);

  if (index !== -1 && published) {
    toggleNavPublish({ title, content, id, published, navigation }, i)
    removeFromNav({ title, content, id, published, navigation }, i)
  } else {
    togglePublish({ title, content, id, published, navigation }, i)
  }
}

export const checkPubStatus = ({ published, history, id }) => {
  return published ? alert('You must unpublish this page prior to editing.') : history.push(`pages/edit/${id}`);
}

export const handleDelete = ({ published, id, deletePage }) => {
  return published ? alert('You must unpublish this page prior to deleting.') : deletePage(id);
}
