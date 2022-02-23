import { createGlobalStyle } from "styled-components";
import ArticulatCFRegular from "../assets/fonts/ArticulatCF-Regular.otf";
import ArticulatCFBold from "../assets/fonts/ArticulatCF-Bold.otf";
import ArticulatCFExtraBold from "../assets/fonts/ArticulatCF-ExtraBold.otf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Articulat';
    src: url(${ArticulatCFRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Articulat Bold';
    src: url(${ArticulatCFBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Articulat Extra Bold';
    src: url(${ArticulatCFExtraBold});
    font-style: normal;
  }
  html{
    font-family: 'Articulat';
    color: var(--gray-1);
  }
  *{
    font-family: 'Articulat';
    color: var(--gray-1);
  }
  h1{
    font-family:  'Articulat Extra Bold';
  }

  h2{
    font-family:  'Articulat Bold';
    font-size: 4.5rem;
  }

  p,span,li,a{
    font-family:  'Articulat';
    font-size: 1.75rem;

  }




`;

export default Typography;
