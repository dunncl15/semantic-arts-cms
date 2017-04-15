import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AdminPageCard from '../components/AdminPageCard.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToNav: (title) => {
      dispatch(actions.addToNav(title))
    },
    removeFromNav: (title) => {
      dispatch(actions.removeFromNav(title))
    },
    togglePublish: (title) => {
      dispatch(actions.togglePublish(title))
    },
    toggleNav: (title) => {
      dispatch(actions.toggleNav(title))
    },
    toggleNavPublish: (title) => {
      dispatch(actions.toggleNavPublish(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageCard);
