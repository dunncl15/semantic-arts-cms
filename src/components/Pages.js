import React from 'react';
import AdminPageCardContainer from '../containers/AdminPageCardContainer.js';

const Pages = ({ pages, userNav, history }) => {
  const published = pages.filter(page => page.published);
  const drafts = pages.filter(page => !page.published);
  return (
    <section className='pages-wrap'>
      <h2>Pages</h2>
      <p className='pages-summary'>All ({pages.length}) | Published ({published.length}) | Drafts ({drafts.length})</p>
      {pages.map((page, i) =>
        <AdminPageCardContainer
          {...page}
          userNav={userNav}
          history={history}
          key={i}
      />
      )}
    </section>
  )
}

export default Pages;
