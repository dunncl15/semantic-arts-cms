import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PageCard from '../components/PageCard.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addToNav: (pageName) => {
      dispatch(actions.addToNav(pageName))
    }
  }
}

export default connect(null, mapDispatchToProps)(PageCard);
