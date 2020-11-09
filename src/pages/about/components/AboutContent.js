import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.main};
`;

const Content = styled.div`
  width: 40%;
  p {
    line-height: 1.3;
  }
  a {
    color: ${(props) => props.theme.color.main};
  }
`;
function AboutContent() {
  return (
    <Content>
      <Title>About Me</Title>
      <p>
        I am Anshu Raj. Making Video On Youtube Since 2017 as part time passion.
        From Last Year I Started Web Development. During Pandmic i Learned so
        may things. My First React Project Was
        <a href="https://covid.anshuopinion.com"> covid Tracker</a>.
        Recently I had Started Coding Related channel on youtube ( Do dome
        Coding). Currently Learning Backend technology ( Node Js Express) to
        become full Stack webdeveloper.
      </p>
    </Content>
  );
}

export default AboutContent;
