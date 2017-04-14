import React from 'react';
import AdminPageCardContainer from '../containers/AdminPageCardContainer.js';

const Pages = ({ pages, history }) => {
  const published = pages.filter(page => page.published);
  const drafts = pages.filter(page => !page.published);
  return (
    <section className='pages-wrap'>
      <h2>Pages</h2>
      <p>All ({pages.length}) | Published ({published.length}) | Drafts ({drafts.length})</p>
      {pages.map((page, i) =>
        <AdminPageCardContainer {...page} history={history} key={ i }/>
      )}
    </section>
  )
}

export default Pages;
