import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class CreatePage extends Component {

  render() {
    return (
      <section className="create-page-wrap">
        <h3>Create Page</h3>
        <form className='create-page'>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' />
          <label htmlFor='body'>Body:</label>
          <textarea type='text' id='body'></textarea>
        </form>
      </section>
    )
  }
}
