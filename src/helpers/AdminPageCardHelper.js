export const handlePublish = ({ pages, togglePublish, toggleNavPublish, title,
                                content, id, published, navigation}, i) => {
  return pages.map(page => {
    if (page.navigation && page.published) {
      toggleNavPublish({ title, content, id, published, navigation }, i)
    } else {
      togglePublish({ title, content, id, published, navigation }, i)
    }
  });
}

export const handleNav = ({ pages, togglePublish, toggleNavPublish, toggleNav,
                            title, content, id, published, navigation}, i) => {
  return pages.map(page => {
    if (!page.navigation && page.published) {
      toggleNav({ title, content, id, published, navigation }, i)
    } else {
      toggleNavPublish({ title, content, id, published, navigation }, i)
    }
  });
}

export const checkPubStatus = ({ published, history, id }) => {
  return published ? alert('You must unpublish this page prior to editing.') : history.push(`pages/edit/${id}`);
}

export const handleDelete = ({ published, id, deletePage }) => {
  return published ? alert('You must unpublish this page prior to deleting.') : deletePage(id);
}
