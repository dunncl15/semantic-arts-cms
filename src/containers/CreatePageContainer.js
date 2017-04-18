import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CreatePage from '../components/CreatePage';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPage: (page) => {
      dispatch(actions.addPage(page))
    },
    editPage: (page) => {
      dispatch(actions.editPage(page))
    },
    togglePublish: (page) => {
      dispatch(actions.togglePublish(page))
    },
    toggleNavPublish: (page) => {
      dispatch(actions.toggleNavPublish(page))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
