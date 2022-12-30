import styled from "styled-components";
import { useRef } from "react";
import {
  Header,
  Hero,
  About,
  SidebarLeft,
  SidebarRight,
  Projects,
  Contact,
  Footer,
} from "../components";

const StyledSection = styled.div`
  max-width: 100%;
  position: relative;
  h2 {
    font-size: 4.5rem;
  }
`;

const Home = () => {
  document.body.style = "background: black";
  const scrollRef = useRef(null);
  return (
    <StyledSection>
      <Header color="dark" />
      <Hero scrollRef={scrollRef} />
      <About scrollRef={scrollRef} />
      <SidebarRight />
      <SidebarLeft />
      <Projects />
      <Contact />
      <Footer />
    </StyledSection>
  );
};

export default Home;
