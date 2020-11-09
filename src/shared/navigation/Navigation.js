import React from "react";
import styled from "styled-components";
import NavigationItems from "./NavigationItems/navigationItems";
import logo from "../../images/offers.gif";
const NavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  background-color: ${(props) => props.theme.color.main};
  position: sticky;
`;
const Logo = styled.img`
  width: 50px;
`;

function Navigation() {
  return (
    <NavBar>
      <Logo src={logo} alt="logo" />
      <NavigationItems />
    </NavBar>
  );
}

export default Navigation;
