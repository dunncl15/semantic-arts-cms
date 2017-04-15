import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const handleNav = ({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation }) => {
  const index = userNav.findIndex(page => page.title === title);
  if (index === -1 && !published) {
    addToNav({ title, content, id, published, navigation })
    toggleNavPublish({ title, content, id, published, navigation });
  }
  if (index === -1 && published) {
    addToNav({ title, content, id, published, navigation })
    toggleNav({ title, content, id, published, navigation })
  }
  if (index !== -1 && published) {
    removeFromNav({ title, content, id, published, navigation })
    toggleNavPublish({ title, content, id, published, navigation });
  }
}

const handlePublish = ({ userNav, removeFromNav, togglePublish, toggleNavPublish, title, content, id, published, navigation }) => {
  const index = userNav.findIndex(page => page.title === title);
  index !== -1 && published ? toggleNavPublish({ title, content, id, published, navigation }) : togglePublish({ title, content, id, published, navigation });
  removeFromNav({ title, content, id, published, navigation });
}

const AdminPageCard = ({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation, history }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card' id={id}>
      <h2 className='page-title'>{ title }</h2>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className={btnClass}
              onClick={ () => handlePublish({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation })}>
              { published ? 'Unpublish' : 'Publish' }
      </button>
      <footer className='card-footer'>
        <Link to={`pages/edit/${title}`}>Edit page</Link>
        <button onClick={ () => handleNav({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation }) }>
          { navigation ? 'Remove from navigation' : 'Add to navigation'}
        </button>
        <p className='status'>
          <span>Status</span>: { published ? 'published' : 'unpublished' }
        </p>
      </footer>
      <button onClick={() => history.push('/pages/about')}></button>
    </article>
  )
}

export default AdminPageCard;
