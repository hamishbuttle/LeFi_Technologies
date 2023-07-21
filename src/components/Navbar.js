// NavbarComponent.js
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

// Define your styled components
const NavbarOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const NavbarInnerContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4%; // Adjust padding here if needed
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  return (
    <NavbarOuterContainer>
      <NavbarInnerContainer>
        <img src={logo} alt="logo" />
        <NavLink href="#">Landlord Dashboard</NavLink>
      </NavbarInnerContainer>
    </NavbarOuterContainer>
  );
};

export default Navbar;
