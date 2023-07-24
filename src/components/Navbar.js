// NavbarComponent.js
import React, {useContext} from "react";
import styled from "styled-components";
import { AuthContext } from './AuthProvider';
import logo from "../images/logo.svg";

// Define your styled components
const NavbarOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
`;

const NavbarInnerContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4%; // Adjust padding here if needed
  div {
    a {
      margin-left: 1rem;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const { userSignOut } = useContext(AuthContext);
  const { authUser } = useContext(AuthContext);
  
  const handleSignOut = () => {
    userSignOut();
  };

  return (
    <NavbarOuterContainer>
      <NavbarInnerContainer>
        <img src={logo} alt="logo" />
        <div> 
          {location.pathname !== "/controlcenter" && (
            <NavLink href="/dashboard">Control Centre</NavLink>
        )}
          {authUser && <NavLink onClick={handleSignOut}>Sign Out</NavLink>}
        </div>
      </NavbarInnerContainer>
    </NavbarOuterContainer>
  );
};

export default Navbar;
