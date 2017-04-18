import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../styles/images/logo.png';

const UserNavigation = ({ userNav }) => {
  return (
    <nav className="user-nav">
      <NavLink className='home' to='/admin'>
        <img src={logo} alt='company logo' />
      </NavLink>
      <ul className='nav-links'>
      {userNav.map((page, i) =>
        <NavLink className='nav-item'
                 activeClassName='active'
                 key={i}
                 to={`/${page.title.toLowerCase()}`}>
          <li>{ page.title }</li>
        </NavLink>
      )}
      </ul>
    </nav>
  )
}

export default UserNavigation;
