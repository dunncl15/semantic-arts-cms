import React from 'react';

const Page = ({ page }) => {
  return (
    <section className="pages-container">
      <article id={page.id} className="public-page">
        <h2>{ page.title }</h2>
        <div dangerouslySetInnerHTML={{__html: page.content}}></div>
      </article>
    </section>
  )
}

export default Page;
