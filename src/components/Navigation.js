import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <aside className='nav-bar'>
     <ul>
      <NavLink exact to='/'
               className="menu-item"
               activeClassName='active'>
               <li>Dashboard</li>
      </NavLink>
      <NavLink exact to='/pages'
               className="menu-item"
               activeClassName='active'>
               <li>Pages</li>
      </NavLink>
      <NavLink to='/new-page'
               className="menu-item"
               activeClassName='active'>
               <li>Create Page</li>
      </NavLink>
     </ul>
    </aside>
  )
}

export default Navigation;
