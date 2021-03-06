import React, { Component } from 'react';
import Editor from './Editor.js';

export default class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      published: false,
      navigation: false,
      id: Date.now()
    }
  }

  componentDidMount() {
    const { page } = this.props;
    if (page) {
      this.setState({
        title: page.title,
        content: page.content
       })
    }
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleTitleCheck({ page, pages, addPage, history }) {
    const savedPage = pages.find(page => page.title === this.state.title);
    if (savedPage) {
      alert('A page with this title already exists. Please create pages with unique titles.');
      this.setState({ title: '' })
    } else {
      addPage(this.state);
      history.push('/admin/pages');
    }
  }

  handleClick(e) {
    e.preventDefault();
    const { page, addPage, editPage, pages, history } = this.props;
    if (!page && !pages.length) {
      addPage(this.state)
      history.push('/admin/pages');
    }
    if (!page && pages.length) {
      this.handleTitleCheck({ page, pages, addPage, history })
    }
    if (page && !page.published) {
      editPage(this.state)
      history.push('/admin/pages');
    }
    this.setState({ title: '' })
  }

  handleEdit(e) {
    this.setState({ content: e })
  }

  render() {
    const { page, router } = this.props;
    const { title } = this.state;
    return (
      <section className="create-page-wrap">
        {page ? <h2>Edit - { page.title }</h2> : <h2>Create Page</h2>}
        <form className='create-page'>
        { router.location.pathname.includes('/admin/new-page') &&
          <input type='text'
                 id='title'
                 name='title'
                 value={title}
                 placeholder='Page title'
                 onChange={(e) => this.handleChange(e)}
          /> }
          <Editor handleChange={this.handleEdit.bind(this)}
                  page={page}
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
