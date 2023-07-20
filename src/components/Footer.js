// Footer.js
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  padding: 20px 4%; // Adjust padding here if needed
`;

const FooterLogo = styled.img`
  width: 56px;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.2);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterLogo src={logo} alt="logo" />
        <Copyright>©LeFi Technologies Pty Ltd</Copyright>
      </div>
      <FooterLinks>
        <FooterLink href="#">Link 1</FooterLink>
        <FooterLink href="#">Link 2</FooterLink>
        <FooterLink href="#">Link 3</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
