import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <NavLink to = "/" exact> All Users </NavLink>
      {/** MyPlaces will be rendered only if user is logged in */}
      <NavLink to = "/users/me/places"> My places </NavLink>
      <NavLink to = "/places/new">add place</NavLink>
      {/** will rendered when user not logged */}
      <NavLink to = "/auth">Login</NavLink>
      <NavLink to = "/logout">logout</NavLink>
    </ul>
  );
};

export default NavLinks;

