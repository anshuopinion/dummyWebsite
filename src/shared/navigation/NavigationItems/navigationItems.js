import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const StyledNavigationItems = styled.ul`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`;

const navData = [
  { link: "", page: "Home" },
  { link: "about", page: "About" },
  { link: "offers", page: "Offers" },
];
function navigationItems() {
  return (
    <StyledNavigationItems>
      {navData.map((navItem) => (
        <NavigationItem
          link={navItem.link}
          page={navItem.page}
          key={navItem.page}
        />
      ))}
    </StyledNavigationItems>
  );
}

export default navigationItems;
