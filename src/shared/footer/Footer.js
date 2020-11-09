import React from "react";
import styled from "styled-components";
import CopyrightQuote from "./footerItems/CopyrightQuote";
import Social from "./footerItems/Social";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: ${(props) => props.theme.color.dark};
  width: 100%;
  color: ${(props) => props.theme.color.light};
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Social />
      <CopyrightQuote />
    </StyledFooter>
  );
}

export default Footer;
