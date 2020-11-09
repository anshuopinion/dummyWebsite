import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledNavigationItem = styled.li``;
const StyledLink = styled(NavLink)`
  color: inherit;
  padding: 0.8rem;
  text-decoration: none;
  &:hover,
  &:active,
  &.active {
    background: yellow;
    color: #000;
  }
`;

function NavigationItem({ link, page, exact }) {
  return (
    <StyledNavigationItem>
      <StyledLink to={`${link}`} exact={exact}>
        {page}
      </StyledLink>
    </StyledNavigationItem>
  );
}

export default NavigationItem;
