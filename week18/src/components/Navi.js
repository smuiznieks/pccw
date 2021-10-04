import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";

const Navi = () => {

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Taco Time!</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/locations">Locations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/menu">Menu</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  );
}

export default Navi;