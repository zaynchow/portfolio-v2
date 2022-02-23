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
  h1,h2,h3,h4,h5,h6,p,span{
    font-family:  'Articulat Bold';
  }


`;

export default Typography;
