import { createGlobalStyle } from "styled-components";
import "fontsource-roboto";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`




${reset}

//Fonts

*, *:before,*:after{
  box-sizing: border-box

}
html{

  scroll-behavior:smooth;
  height:100%;
}
body{
  

  font-family: 'Roboto', sans-serif;

  min-height: 100vh;
  position: relative;
  padding-bottom: 160px;

  a{
    text-decoration:none;
    color:inherit;
  }
}
`;

export default GlobalStyle;
