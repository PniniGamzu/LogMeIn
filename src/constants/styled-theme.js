import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
      white: '#ffffff',
      red: '#C10230',
      green: '#04bb80',
      black: '#000000',
      gray90: '#434343',
      gray75: '#979797',
      gray50: '#cecece',
      gray30: '#F0F0F0',
      gray10: '#f9f9f9',
      blue75: '#00386d',
      blue60: '#276aa9',
      blue50: '#0078a0',
      blue25: '#009dd3',
      blue5: '#def1f8'
    }
  };
  
  export const color = colorString => theme.colors[colorString];

  export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap');
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 12px;
    box-sizing: border-box;
    letter-spacing: 0.5px;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;
  }
`;
