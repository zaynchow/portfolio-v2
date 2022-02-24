import React from "react";
import styled from "styled-components";
import { Header } from "../components";

const StyledMain = styled.main`
  color: #242424;
  display: flex;
  flex-direction: column;
  font-family: "Articulat Regular";
  margin-bottom: 192px;

  margin: 0 auto;
  margin-top: 240px;
  max-width: 85vw;
  padding: 1rem 4rem;
  .resume-intro {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
    }
  }
`;

const Resume = () => {
  document.body.style = "background: white";
  return (
    <StyledMain>
      <Header />
      <section className="resume-intro">
        <h1>Zayn Chowdhury</h1>
      </section>
    </StyledMain>
  );
};

export default Resume;
