import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CreatePage from '../components/CreatePage';

const mapDispatchToProps = (dispatch) => {
  return {
    addPage: (page) => {
      dispatch(actions.addPage(page))
    },
    editPage: (page) => {
      dispatch(actions.editPage(page))
    },
    editPublished: (page) => {
      dispatch(actions.editPublished(page))
    },
    editPubNav: (page) => {
      dispatch(actions.editPubNav(page))
    }
  }
}


export default connect(null, mapDispatchToProps)(CreatePage);
