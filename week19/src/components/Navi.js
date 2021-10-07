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
            <NavLink tag={Link} to="/login">Take me to the sign in page</NavLink> 
           }
          </NavItem>
        </Nav>
    </Navbar>
  );
}

// UPDATE: Log In button was working as expected during office hours
// When you click on the Log In button it links to the /login route where you have to click the "Log In" button
// Not a good user experience!
// It might be better to refactor line 35 to use auth.signin() function and then reroute
// Try updating this on your own!!

export default Navi;