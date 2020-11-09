import React from "react";
import Slider from "react-slick";
import lotus from "../../images/sliderImage/lotus.png";
import sunrise from "../../images/sliderImage/sunRise.jpg";
import waterFall from "../../images/sliderImage/waterFall.jpg";
import styled from "styled-components";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StyledSlider = styled(Slider)``;
const SliderImage = styled.img`
  width: 100%;
`;
const SliderContainer = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Home() {
  return (
    <div>
      <StyledSlider {...settings}>
        <SliderContainer>
          <SliderImage src={lotus} alt="lotus" />
          <h3>1</h3>
        </SliderContainer>
        <SliderContainer>
          <SliderImage src={sunrise} alt="sunrise" />
          <h3>2</h3>
        </SliderContainer>
        <SliderContainer>
          <SliderImage src={waterFall} alt="waterFall" />
          <h3>3</h3>
        </SliderContainer>
      </StyledSlider>
    </div>
  );
}

export default Home;
