import React from 'react'
import { NavLink } from 'react-router-dom';

const UserNavigation = ({ userNav }) => {
  return (
    <nav className="user-nav">
      <NavLink className='home nav-item' to='/'>Home</NavLink>
      {userNav.map((title, i) => <NavLink className='nav-item' key={i} to='/'>{ title }</NavLink>)}
    </nav>
  )
}

export default UserNavigation;
