import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      published: false
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addPage(this.state);
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <section className="create-page-wrap">
        <h2>Create Page</h2>
        <form className='create-page'>
          <label htmlFor='title'>Title:</label>
          <input type='text'
                 id='title'
                 name='title'
                 value={this.state.title}
                 onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor='body'>Body:</label>
          <textarea type='text'
                    id='body'
                    name='body'
                    value={this.state.body}
                    onChange={(e) => this.handleChange(e)}>
          </textarea>
          <button className='save-btn'
                  onClick={(e) => this.handleClick(e)}>
                  Save page
          </button>
        </form>
      </section>
    )
  }
}
