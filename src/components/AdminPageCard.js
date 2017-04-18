import React from 'react';
import classNames from 'classnames';

import cloudPublish from '../styles/images/cloud-upload.svg';
import cloudUnpublish from '../styles/images/cloud-unpublish.svg';
import pencil from '../styles/images/pencil-blue.svg';
import add from '../styles/images/add-icon.svg';
import deleteIcon from '../styles/images/delete.svg';

const handleNav = ({ userNav, addToNav, removeFromNav,
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

const handlePublish = ({ userNav, removeFromNav, togglePublish,
                         toggleNavPublish, title, content,
                         id, published, navigation, i }) => {

  const index = userNav.findIndex(page => page.id === id);
  return index !== -1 && published ? toggleNavPublish({ title, content, id, published, navigation }, i) :
                              (togglePublish({ title, content, id, published, navigation }, i),
                               removeFromNav({ title, content, id, published, navigation }, i));
}

const checkPubStatus = ({ published, navigation, history, id }) => {
  return published || navigation ? alert('You must unpublish this page prior to editing.') :   history.push(`pages/edit/${id}`);
}


const AdminPageCard = ({ userNav, addToNav, removeFromNav, history,
                         togglePublish, toggleNav, toggleNavPublish, deletePage,
                         title, content, id, published, navigation, i }) => {

  const btnClass = classNames({ 'unpublish': published, 'publish': !published })
  return (
    <article className='page-card' id={id}>
      <h3 className='page-title'>{ title }</h3>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className='delete-btn'
              onClick={() => deletePage(id)}>
        <img className='delete-icon' src={deleteIcon} alt='delete page'/>
      </button>
      <button className={btnClass}
              onClick={ () => handlePublish({ userNav, addToNav, removeFromNav,
                                              togglePublish, toggleNav, toggleNavPublish,
                                              title, content, id, published, navigation, i })}>
              { published ? <img className='cloud-icon' src={cloudUnpublish}/> : <img className='cloud-icon' src={cloudPublish}/>}
              { published ? 'Unpublish' : 'Publish' }
      </button>
      <footer className='card-footer'>
        <button className='edit'
                onClick={() => checkPubStatus({ published, navigation, history, id })}>
          <img className='pencil-blue' src={pencil}/>
          Edit page
        </button>
        <button className='add-to-nav-btn'
                onClick={ () => handleNav({ userNav, addToNav, removeFromNav,
                                            togglePublish, toggleNav, toggleNavPublish,
                                            title, content, id, published, navigation, i }) }>
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
