import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AdminPageCard from '../components/AdminPageCard.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToNav: (pageName) => {
      dispatch(actions.addToNav(pageName))
    },
    togglePublish: (page) => {
      dispatch(actions.togglePublish(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageCard);
