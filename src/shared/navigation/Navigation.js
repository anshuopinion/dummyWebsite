import React from "react";
import styled from "styled-components";
import NavigationItems from "./NavigationItems/navigationItems";
import logo from "../../images/logo.png";
const NavBar = styled.header`
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
const LogoContainer = styled.div`
  display: flex;
  width: 200px;
  font-size: 1.2rem;
  align-items: center;
`;

function Navigation() {
  return (
    <NavBar>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        Course NATION
      </LogoContainer>

      <NavigationItems />
    </NavBar>
  );
}

export default Navigation;
