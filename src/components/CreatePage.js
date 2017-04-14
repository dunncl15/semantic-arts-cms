import React, { Component } from 'react';
import Editor from './Editor.js';

export default class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      published: false,
      id: Date.now()
    }
  }

  componentDidMount() {
    if (this.props.page) {
      this.setState({
        title: this.props.page.title,
        content: this.props.page.content
       })
    }
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.page ? this.props.editPage(this.state) : this.props.addPage(this.state);
    this.setState({ title: '' })
    this.props.history.push('/admin/pages');
  }

  handleEdit(e) {
    this.setState({ content: e})
  }

  render() {
    return (
      <section className="create-page-wrap">
        {this.props.page ? <h2>Edit - {this.props.page.title}</h2> : <h2>Create Page</h2>}
        <form className='create-page'>
          <label htmlFor='title'>Title:</label>
          <input type='text'
                 id='title'
                 name='title'
                 value={this.state.title}
                 onChange={(e) => this.handleChange(e)}
          />
          <Editor handleChange={this.handleEdit.bind(this)}
                  content={this.state.content}
          />
          <button className='save-btn'
                  onClick={(e) => this.handleClick(e)}>
                  Save page
          </button>
        </form>
      </section>
    )
  }
}
