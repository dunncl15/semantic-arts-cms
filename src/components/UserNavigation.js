import React from 'react'
import { NavLink } from 'react-router-dom';

const UserNavigation = ({ userNav }) => {
  return (
    <nav className="user-nav">
      <NavLink className='home nav-item' to='/'>Home</NavLink>
      {userNav.map((page, i) => <NavLink className='nav-item' key={i} to={`/pages/${page.title.toLowerCase()}`}>{ page.title }</NavLink>)}
    </nav>
  )
}

export default UserNavigation;
