import React from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from '../styles/images/home-icon.svg';
import pencilIcon from '../styles/images/pencil-icon.svg';
import pageIcon from '../styles/images/page-icon.svg';

const Navigation = () => {
  return (
    <aside className='nav-bar'>
     <ul>
      <NavLink exact to='/admin'
               className="menu-item"
               activeClassName='active'>
               <li>
                 <img
                  className="nav-icon"
                  src={homeIcon}
                  alt='home-icon'
                  />
                 Dashboard
               </li>
      </NavLink>
      <NavLink exact to='/admin/pages'
               className="menu-item"
               activeClassName='active'>
               <li>
                 <img
                  className="nav-icon"
                  src={pageIcon}
                  alt='home-icon'
                  />
                 Pages
               </li>
      </NavLink>
      <NavLink to='/admin/new-page'
               className="menu-item"
               activeClassName='active'>
               <li>
                 <img
                  className="nav-icon"
                  src={pencilIcon}
                  alt='home-icon'
                  />
                 Create Page
               </li>
      </NavLink>
     </ul>
    </aside>
  )
}

export default Navigation;
