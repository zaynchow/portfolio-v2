import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";

const StyledSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 100px 20px 0px 20px;

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
    <StyledSection id="projects-start">
      <h2>Recent work and experiments</h2>
      <section className="projects">
        <SingleProject
          width="48"
          color="#a2f6cf"
          technologies={["HTML", "CSS", "React", "Express", "Javascript"]}
          title="Spotify Analytics App"
          year="2022"
          git="https://github.com/zaynchow/spotify-app"
          live="https://spotify-analytics-data-app.herokuapp.com/"
        >
          A web app for visualizing personalized Spotify data built with React,
          Express, and the Spotify API.
        </SingleProject>
        <SingleProject
          title="SubsOutlet"
          width="48"
          technologies={["HTML", "CSS", "JS", "WordPress", "Elementor"]}
          color="#AEE8FA"
          year="2020"
          live="https://subsoutlet.com"
        >
          Production e-commerce website with third-party chatbot and auto
          license key delivery system.
        </SingleProject>
        <SingleProject
          title="CommerceCart"
          width="100"
          color="#f9f9f9"
          year="2021"
          technologies={["Java", "Swing"]}
          live=""
          git="https://github.com/zaynchow/CommerceCart"
        >
          Commerce Cart is a full-fledged, user-friendly e-commerce store with
          an admin dashboard for consumer analytics.
        </SingleProject>
        {/* <SingleProject
          title="Spotify Analytics App"
          width="48"
          color="#FFD6BA"
        ></SingleProject>

        <SingleProject width="48" color="#FFC6D9" /> */}
      </section>
    </StyledSection>
  );
};

export default Projects;
