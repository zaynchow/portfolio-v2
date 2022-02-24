import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";

const StyledSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 60px 20px;

  h2 {
    margin-bottom: 50px;
    text-align: center;
    color: white;
  }
  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 864px;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
  }
`;

const Projects = () => {
  return (
    <StyledSection>
      <h2>Recent work and experiments</h2>
      <section className="projects">
        <SingleProject
          width="48"
          color="#a2f6cf"
          technologies={["react", "express", "javascript"]}
        />
        <SingleProject width="48" color="#AEE8FA" />
        <SingleProject width="100" color="#f9f9f9" />
        <SingleProject width="48" color="#FFD6BA" />

        <SingleProject width="48" color="#FFC6D9" />
      </section>
    </StyledSection>
  );
};

export default Projects;
