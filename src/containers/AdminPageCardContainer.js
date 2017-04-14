import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AdminPageCard from '../components/AdminPageCard.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addToNav: (pageName) => {
      dispatch(actions.addToNav(pageName))
    }
  }
}

export default connect(null, mapDispatchToProps)(AdminPageCard);
