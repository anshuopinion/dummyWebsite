import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledNavigationItem = styled.li``;
function NavigationItem({ link, page }) {
  return (
    <StyledNavigationItem>
      <Link to={`${link}`}>{page}</Link>
    </StyledNavigationItem>
  );
}

export default NavigationItem;
