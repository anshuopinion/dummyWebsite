import React from "react";
import styled from "styled-components";
import HomeDescription from "./components/HomeDescription";
import HomeVideo from "./components/HomeVideo";
import SlickSlider from "./components/SlickSlider";

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <SlickSlider />
      <HomeDescription />
      <HomeVideo />
    </StyledHome>
  );
}

export default Home;
