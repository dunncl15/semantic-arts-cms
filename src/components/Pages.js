import React from 'react';
import PageCardContainer from '../containers/PageCardContainer.js';

const Pages = ({ pages, history }) => {
  const published = pages.filter(page => page.published);
  const drafts = pages.filter(page => !page.published);
  return (
    <section className='pages-wrap'>
      <h2>Pages</h2>
      <p>All ({pages.length}) | Published ({published.length}) | Drafts ({drafts.length})</p>
      {pages.map((page, i) =>
        <PageCardContainer {...page} history={history} key={ i }/>
      )}
    </section>
  )
}

export default Pages;
