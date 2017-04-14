import React from 'react';
import { connect } from 'react-redux';

import Pages from '../components/Pages.js';

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    userNav: state.userNav
   }
}


export default connect(mapStateToProps, null)(Pages);
