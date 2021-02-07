import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

 *,*::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 html{
     font-size:62.5%;
 }
 body{
     font-size:1.6rem;
     font-family: 'Source Sans Pro', sans-serif;
 }
`;

export default GlobalStyle;
