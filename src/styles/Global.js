import {
  createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat';
}
  body {
    height: 100%;
    width: 100vw;
    background-image: linear-gradient(167.69deg, #155A5A 8.4%, #157E75 43.21%, #5BC6B3 72.33%, #418F85 95.4%, #157E75 114.41%);
    font-family: 'Montserrat';
  }
`;

export default GlobalStyle;