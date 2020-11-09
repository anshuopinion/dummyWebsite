import React from "react";
import styled from "styled-components";
const StyledAbout = styled.div`
  display: flex;
  padding: 3rem 1rem;
  justify-content: space-around;
`;
const Content = styled.div`
  width: 40%;
  p {
    line-height: 1.3;
  }
`;
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
const Alink = styled.a`
  color: ${(props) => props.theme.color.main};
`;

function About() {
  return (
    <StyledAbout>
      <Content>
        <Title>About Me</Title>
        <p>
          I am Anshu Raj. Making Video On Youtube Since 2017 as part time
          passion. From Last Year I Started Web Development. During Pandmic i
          Learned so may things. My First React Project Was
          <Alink href="https://covid.anshuopinion.com"> covid Tracker</Alink>.
          Recently I had Started Coding Related channel on youtube ( Do dome
          Coding). Currently Learning Backend technology ( Node Js Express) to
          become full Stack webdeveloper.
        </p>
      </Content>
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
    </StyledAbout>
  );
}

export default About;
