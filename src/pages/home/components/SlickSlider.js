import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import lotus from "../../../images/sliderImage/lotus.png";
import sunrise from "../../../images/sliderImage/sunRise.jpg";
import waterFall from "../../../images/sliderImage/waterFall.jpg";

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

const SliderTitle = styled.h3`
  position: absolute;
  top: 550px;
  color: ${(props) => props.theme.color.light};
  font-size: 5rem;
  margin-left: 2rem;
`;
function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      <SliderContainer>
        <SliderImage src={lotus} alt="lotus" />
        <SliderTitle>Loutus on River</SliderTitle>
      </SliderContainer>
      <SliderContainer>
        <SliderImage src={sunrise} alt="sunrise" />{" "}
        <SliderTitle>Sun Rise</SliderTitle>
      </SliderContainer>
      <SliderContainer>
        <SliderImage src={waterFall} alt="waterFall" />
        <SliderTitle>Water Fall</SliderTitle>
      </SliderContainer>
    </StyledSlider>
  );
}

export default SlickSlider;
