import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const handlePublish = ({ userNav, addToNav, togglePublish, title, published, id, content }) => {
  const index = userNav.findIndex(page => page.title === title);
  if (index === -1) {
    addToNav({ title });
    togglePublish({ title, content, id, published })
  } else {    
    togglePublish({ title, content, id, published })
  }
}

const AdminPageCard = ({ title, content, published, id, addToNav, togglePublish, history, userNav }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card' id={id}>
      <h2 className='page-title'>{ title }</h2>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className={btnClass}
              onClick={ () => togglePublish({ title, content, id, published }) }>
              { published ? 'Unpublish' : 'Publish' }
      </button>
      <footer className='card-footer'>
        <Link to={`pages/edit/${id}`}>Edit page</Link>
        <button onClick={ () => handlePublish({ userNav, addToNav, togglePublish, title, published, id, content }) }>
          { published ? 'Remove from navigation' : 'Add to navigation'}
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
