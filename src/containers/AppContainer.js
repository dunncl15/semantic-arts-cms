import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { pages: state.pages }
}

export default connect(mapStateToProps, null)(App);
