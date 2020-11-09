import React from "react";
import styled from "styled-components";
const ProjectContainer = styled.div``;
const ProjectList = styled.ul``;
const Project = styled.li`
  margin-top: 1rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.color.main};
    transition: 0.3s;
  }
`;
const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.main};
`;

function AboutProjects() {
  return (
    <ProjectContainer>
      <Title>Projects....</Title>
      <ProjectList>
        <Project>
          <a href="https://github.com/anshuopinion/Covid-19">Covid Tracker</a>
        </Project>
        <Project>
          <a href="https://github.com/anshuopinion/portfolio-project">
            Portfolio Website
          </a>
        </Project>
        <Project>
          <a href="https://github.com/anshuopinion/nextjs">
            Next Js Blog Website Strapi ( JAMStack )
          </a>
        </Project>
        <Project>
          <a href="https://github.com/anshuopinion/offer-website">
            Offer Website Using Strapi ( JAMStack )
          </a>
        </Project>
      </ProjectList>
    </ProjectContainer>
  );
}

export default AboutProjects;
