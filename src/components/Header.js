import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../styles/images/logo.png'

const Header = ({ history }) => {
  return (
    <header>
      <img src={logo} className='app-title' alt='semantic arts logo' />
      <Link to='/'>Sign out</Link>
    </header>
  )
}

export default Header;
