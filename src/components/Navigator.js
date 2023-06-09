import React from "react";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './Navigator.css';

import routing from '../routing.js';

const navigator = () => {
  return (
    <div>
      <Nav className="flexbox menu" pills>
        <NavItem className="menuItem">
          <NavLink className="menuLink" tag={RouterNavLink} to={routing.products} exact="true">
            T-SHIRTS
          </NavLink>
        </NavItem>
        <NavItem className="menuItem">
          <NavLink className="menuLink" tag={RouterNavLink} to={routing.notImplemented} exact="true">
            CREATE FROM PICTURE
          </NavLink>
        </NavItem>
        <NavItem className="menuItem">
          <NavLink className="menuLink" tag={RouterNavLink} to={routing.notImplemented} exact="true">
            CREATE YOUR OWN
          </NavLink>
        </NavItem>
        <NavItem className="menuItem">
          <NavLink className="menuLink" tag={RouterNavLink} to={routing.notImplemented} exact="true">
            ABOUT US
          </NavLink>
        </NavItem>
        <NavItem className="menuItem">
          <NavLink className="menuLink" tag={RouterNavLink} to={routing.notImplemented} exact="true">
            LOG IN
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default navigator;
