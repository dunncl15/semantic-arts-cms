import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const PageCard = ({ title, content, published, addToNav, history }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card'>
      <h2 className='page-title'>{ title }</h2>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className={btnClass}>{ published ? 'Unpublish' : 'Publish' }</button>
      <footer className='card-footer'>
        <Link to={`pages/edit/${title}`}>Edit page</Link>
        <button onClick={() => addToNav(title)}>Add to navigation</button>
        <button onClick={() => history.push('/')}></button>
        <p className='status'><span>Status</span>: { published ? 'published' : 'unpublished' }</p>
      </footer>
    </article>
  )
}

export default PageCard;
