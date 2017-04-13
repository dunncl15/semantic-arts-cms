import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const PageCard = ({ title, content, published }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card'>
      <h2 className='page-title'>{ title }</h2>
      <p className='page-body'>{ content }</p>
      <button className={btnClass}>{ published ? 'Unpublish' : 'Publish' }</button>
      <footer className='card-footer'>
        <Link to=''><button>Edit page</button></Link>
        <button>Add to navigation</button>
        <p className='status'><span>Status</span>: { published ? 'published' : 'unpublished' }</p>
      </footer>
    </article>
  )
}

export default PageCard;
