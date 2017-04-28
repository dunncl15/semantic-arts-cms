import React, { Component } from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

import UserNavigation from './UserNavigation';
import cloudPublish from '../styles/images/cloud-upload.svg';
import cloudUnpublish from '../styles/images/cloud-unpublish.svg';
import pencil from '../styles/images/pencil-blue.svg';
import add from '../styles/images/add-icon.svg';
import deleteIcon from '../styles/images/delete.svg';
import preview from '../styles/images/preview.svg';

class AdminPageCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  handlePublish({ pages, togglePublish, toggleNavPublish,
                  title, content, id, published, navigation}, i) {
    if (pages[i].navigation && pages[i].published) {
      toggleNavPublish({ title, content, id, published, navigation }, i)
    } else {
      togglePublish({ title, content, id, published, navigation }, i)
    }
  }

  handleNav({ pages, togglePublish, toggleNavPublish, toggleNav,
              title, content, id, published, navigation}, i) {
    if (!pages[i].navigation && pages[i].published) {
      toggleNav({ title, content, id, published, navigation }, i)
    } else {
      toggleNavPublish({ title, content, id, published, navigation }, i)
    }
  }

  checkPubStatus({ published, history, id }) {
    return published ? alert('You must unpublish this page prior to editing.') : history.push(`pages/edit/${id}`);
  }

  handleDelete ({ published, id, deletePage }) {
    return published ? alert('You must unpublish this page prior to deleting.') : deletePage(id);
  }

  render() {
    const { pages, history, togglePublish, toggleNavPublish, toggleNav,
           deletePage, title, content, id, published, navigation, i } = this.props;
    const btnClass = classNames({ 'unpublish': published, 'publish': !published })
    return (
      <article className='page-card' id={id}>
        <Modal isOpen={this.state.showModal}
               contentLabel='Test Modal'
               overlayClassName='overlay'
               className='model-content'>
          <button onClick={() => this.hideModal()}
                  className='close-modal'>
            <img className='delete-icon'
                 src={deleteIcon} />
          </button>
          <UserNavigation pages={pages} />
           <article  className="public-page">
             <h2>{ title }</h2>
             <div dangerouslySetInnerHTML={{__html: content}}></div>
           </article>
        </Modal>
        <h3 className='page-title'>{ title }</h3>
        <div className='page-body' dangerouslySetInnerHTML={{__html: content}}></div>
        <button className='delete-btn'
                onClick={() => this.handleDelete({ published, id, deletePage, history })}>
          <img className='delete-icon'
               src={deleteIcon}
               alt='delete page'
          />
        </button>
        <button className='preview-btn'
                onClick={() => this.showModal()}>
          <img className='action-icon'
               src={preview}
               alt='preview icon'
          />
          Preview
        </button>
        <button className={btnClass}
                onClick={() => this.handlePublish({ pages, togglePublish, toggleNavPublish,
                                               title, content, id, published, navigation }, i)}>
          <img className='cloud-icon'
               src={published ? cloudUnpublish : cloudPublish}
               alt='cloud icon'
          />
          { published ? 'Unpublish' : 'Publish' }
        </button>
        <footer className='card-footer'>
          <button className='edit'
                  onClick={() => this.checkPubStatus({ published, history, id })}>
            <img className='action-icon'
                 src={pencil}
                 alt='pencil icon'
            />
            Edit page
          </button>
          <button className='add-to-nav-btn'
                  onClick={ () => this.handleNav({ pages, togglePublish, toggleNavPublish, toggleNav,
                                              title, content, id, published, navigation }, i) }>
            <img className='action-icon'
                 src={add}
                 alt='plus icon'
            />
            <span>{ navigation ? 'Remove from navigation' : 'Add to navigation' }</span>
          </button>
          <p className='status'>
            <span>Status</span>: { published ? 'published' : 'unpublished' }
          </p>
        </footer>
      </article>
    )
  }
}

export default AdminPageCard;
