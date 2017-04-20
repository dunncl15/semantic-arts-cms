import React from 'react';
import classNames from 'classnames';

import { handlePublish, handleNav, checkPubStatus, handleDelete } from '../helpers/AdminPageCardHelper';
import cloudPublish from '../styles/images/cloud-upload.svg';
import cloudUnpublish from '../styles/images/cloud-unpublish.svg';
import pencil from '../styles/images/pencil-blue.svg';
import add from '../styles/images/add-icon.svg';
import deleteIcon from '../styles/images/delete.svg';

const AdminPageCard = ({  pages, history, togglePublish, toggleNavPublish, toggleNav,
                          deletePage, title, content, id, published, navigation, i }) => {

  const btnClass = classNames({ 'unpublish': published, 'publish': !published })
  return (
    <article className='page-card' id={id}>
      <h3 className='page-title'>{ title }</h3>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className='delete-btn'
              onClick={() => handleDelete({ published, id, deletePage, history })}>
        <img className='delete-icon'
             src={deleteIcon}
             alt='delete page'
        />
      </button>
      <button className={btnClass}
              onClick={() => handlePublish({ pages, togglePublish, toggleNavPublish,
                                             title, content, id, published, navigation }, i)}>
        <img className='cloud-icon'
             src={published ? cloudUnpublish : cloudPublish}
             alt='cloud icon'
        />
        { published ? 'Unpublish' : 'Publish' }
      </button>
      <footer className='card-footer'>
        <button className='edit'
                onClick={() => checkPubStatus({ published, history, id })}>
          <img className='pencil-blue'
               src={pencil}
               alt='pencil icon'
          />
          Edit page
        </button>
        <button className='add-to-nav-btn'
                onClick={ () => handleNav({ pages, togglePublish, toggleNavPublish, toggleNav,
                                            title, content, id, published, navigation }, i) }>
          <img className='add-icon'
               src={add}
               alt='plus icon'
          />
          <span>{ navigation ? 'Remove from navigation' : 'Add to navigation' }</span>
        </button>
        <p className='status'>
          <span>Status</span>: { published ? 'published' : 'unpublished' }
        </p>
      </footer>
    </article>
  )
}

export default AdminPageCard;
