import React from 'react';
import classNames from 'classnames';

const PageCard = ({ title, body, published }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card'>
      <h2 className='page-title'>{ title }</h2>
      <p className='page-body'>{ body }</p>
      <button className={btnClass}>{ published ? 'Unpublish' : 'Publish' }</button>
      <footer className='card-footer'>
        <button>Edit page</button>
        <button>Add to navigation</button>
        <p className='status'><span>Status</span>: { published ? 'published' : 'unpublished' }</p>
      </footer>
    </article>
  )
}

export default PageCard;
