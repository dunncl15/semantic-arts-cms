import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const checkUserNav = ({ userNav, addToNav, title, published, id }) => {
  const index = userNav.findIndex(page => page.title === title);
  index === -1 ? addToNav({ title, id, published: !published }) : alert(`A page with the title ${title} already exists.`);
}

const AdminPageCard = ({ title, content, published, id, addToNav, history, userNav }) => {
  const btnClass = classNames({
    'unpublish': published,
    'publish': !published
  })
  return (
    <article className='page-card' id={id}>
      <h2 className='page-title'>{ title }</h2>
      <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
      <button className={btnClass}>{ published ? 'Unpublish' : 'Publish' }</button>
      <footer className='card-footer'>
        <Link to={`pages/edit/${id}`}>Edit page</Link>
        <button onClick={ () => checkUserNav({ userNav, addToNav, title, published, id }) }>Add to navigation</button>
        <button onClick={ () => history.push('/') }></button>
        <p className='status'><span>Status</span>: { published ? 'published' : 'unpublished' }</p>
      </footer>
    </article>
  )
}

export default AdminPageCard;
