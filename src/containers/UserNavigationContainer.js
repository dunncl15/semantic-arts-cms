import { connect } from 'react-redux';
import UserNavigation from '../components/UserNavigation';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(UserNavigation);
