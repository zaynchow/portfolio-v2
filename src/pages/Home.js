import styled from "styled-components";
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
  position: relative;
  h2 {
    font-size: 4.5rem;
  }
`;

const Home = () => {
  document.body.style = "background: black";
  return (
    <StyledSection>
      <Header color="dark" />
      <Hero />
      <About />
      <SidebarRight />
      <SidebarLeft />
      <Projects />
      <Contact />
      <Footer />
    </StyledSection>
  );
};

export default Home;
