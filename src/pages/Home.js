import styled from "styled-components";
import {
  Header,
  Hero,
  About,
  SidebarLeft,
  SidebarRight,
  Projects,
} from "../components";

const StyledSection = styled.div`
  position: relative;
`;

const Home = () => {
  return (
    <StyledSection>
      <Header />
      <Hero />
      <About />
      <SidebarRight />
      <SidebarLeft />
      <Projects />
    </StyledSection>
  );
};

export default Home;
