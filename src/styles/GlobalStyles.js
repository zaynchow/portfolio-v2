import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`
${variables};

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
    
  }

  
  html{
    font-size: 10px;
    font-family: 'Articulat Regular';
    max-width:100%;
    overflow-x:hidden;
    scroll-behavior: smooth;

    @media (max-width:799px){

    padding: 0px 50px;
}
@media (max-width:575.98px){

padding: 0px 20px;
}
    
  }
  body{
    max-width:100%;
    overflow-x:hidden;

  
    

  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }

`;
export default GlobalStyles;
