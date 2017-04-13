import React, { Component } from 'react';
import Editor from './Editor.js'

export default class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      published: false
    }
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addPage(this.state);
    this.setState({
      title: ''
    })
  }

  handleEdit(e) {
    this.setState({ content: e})
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
          <Editor onChange={this.handleEdit.bind(this)}/>
          <button className='save-btn'
                  onClick={(e) => this.handleClick(e)}>
                  Save page
          </button>
        </form>
      </section>
    )
  }
}
