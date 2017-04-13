import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserNavigation from '../components/UserNavigation';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(UserNavigation);
