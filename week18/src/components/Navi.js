import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "./ProvideAuth";

function Navi() {
  let history = useHistory();
  // console.log(history);
  let auth = useAuth();
  // console.log(auth);

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
          <NavItem>
           { auth.user ? 
            <NavLink onClick={() => {
              auth.signout(() => history.push('/'));
            }}>Log Out</NavLink>
            :
            <NavLink tag={Link} to="/login">Log In</NavLink> 
           }
          </NavItem>
        </Nav>
    </Navbar>
  );
}

export default Navi;