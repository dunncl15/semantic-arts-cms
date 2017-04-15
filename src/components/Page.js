import React from 'react';

const Page = ({ page }) => {
  return (
    <article id={page.id}>
      <h2>{ page.title }</h2>
      <div dangerouslySetInnerHTML={{__html: page.content}}></div>
    </article>
  )
}

export default Page;
