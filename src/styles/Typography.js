import { createGlobalStyle } from "styled-components";
import ArticulatCFRegular from "../assets/fonts/ArticulatCF-Regular.otf";
import ArticulatCFBold from "../assets/fonts/ArticulatCF-Bold.otf";
import ArticulatCFExtraBold from "../assets/fonts/ArticulatCF-ExtraBold.otf";
import ArticulatCFMedium from "../assets/fonts/ArticulatCF-Medium.otf";
import ArticulatCFLight from "../assets/fonts/ArticulatCF-Light.otf";
import SFMonoRegular from "../assets/fonts/SFMono-Regular.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Articulat Regular';
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
  @font-face {
    font-family: 'Articulat Medium';
    src: url(${ArticulatCFMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Articulat Light';
    src: url(${ArticulatCFLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'SFMono Regular';
    src: url(${SFMonoRegular});
    font-style: normal;
  }

 
  h1{
    font-family:  'Articulat Extra Bold';
  }

  h2{
    font-family:  'Articulat Bold';
    
  }

  p,span,li,a{
    font-family:  'Articulat Regular';
    font-size: 1.75rem;


  }




`;

export default Typography;
