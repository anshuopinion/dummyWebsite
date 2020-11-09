import React from "react";
import styled from "styled-components";
import AboutContent from "./components/AboutContent";
import AboutProjects from "./components/AboutProjects";
const StyledAbout = styled.div`
  display: flex;
  padding: 3rem 1rem;
  justify-content: space-around;
`;

function About() {
  return (
    <StyledAbout>
      <AboutContent />
      <AboutProjects />
    </StyledAbout>
  );
}

export default About;
