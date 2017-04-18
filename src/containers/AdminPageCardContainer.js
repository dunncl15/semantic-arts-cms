import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AdminPageCard from '../components/AdminPageCard.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToNav: (page) => {
      dispatch(actions.addToNav(page))
    },
    removeFromNav: (page) => {
      dispatch(actions.removeFromNav(page))
    },
    togglePublish: (page, index) => {
      dispatch(actions.togglePublish(page, index))
    },
    toggleNav: (page, index) => {
      dispatch(actions.toggleNav(page, index))
    },
    toggleNavPublish: (page, index) => {
      dispatch(actions.toggleNavPublish(page, index))
    },
    deletePage: (id) => {
      dispatch(actions.deletePage(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageCard);
