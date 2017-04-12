import React from 'react';
import PageCard from './PageCard';

const Pages = ({ pages }) => {
  const published = pages.filter(page => page.published);
  const drafts = pages.filter(page => !page.published);
  return (
    <section className='pages-wrap'>
      <h2>Pages</h2>
      <p>All ({pages.length}) | Published ({published.length}) | Drafts ({drafts.length})</p>
      {pages.map((page, i) =>
        <PageCard {...page} key={ i }/>
      )}
    </section>
  )
}

export default Pages;
