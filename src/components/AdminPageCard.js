import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import cloudPublish from '../styles/images/cloud-upload.svg';
import cloudUnpublish from '../styles/images/cloud-unpublish.svg';
import pencil from '../styles/images/pencil-blue.svg';
import add from '../styles/images/add-icon.svg';

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
      <h3 className='page-title'>{ title }</h3>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className={btnClass}
              onClick={ () => handlePublish({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation })}>
              { published ? <img className='cloud-icon' src={cloudUnpublish}/> : <img className='cloud-icon' src={cloudPublish}/>}
              { published ? 'Unpublish' : 'Publish' }
      </button>
      <footer className='card-footer'>
        <Link className='edit' to={`pages/edit/${title}`}>
          <img className='pencil-blue' src={pencil}/>
          Edit page
          </Link>
        <button className='add-to-nav-btn' onClick={ () => handleNav({ userNav, addToNav, removeFromNav, togglePublish, toggleNav, toggleNavPublish, title, content, id, published, navigation }) }>
        <img className='add-icon' src={add} />
          { navigation ? <span>Remove from navigation</span> : <span>Add to navigation</span> }
        </button>
        <p className='status'>
          <span>Status</span>: { published ? 'published' : 'unpublished' }
        </p>
      </footer>
    </article>
  )
}

export default AdminPageCard;
