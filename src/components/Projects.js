import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";
import icon1 from "../assets/images/project-icon1.svg";
import icon2 from "../assets/images/project-icon2.svg";
import icon3 from "../assets/images/project-icon3.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 799px) {
    margin-top: 35%;
    .projects-start h2 {
      font-size: 3.5rem;
      line-height: 1;
    }
    .projects {
      flex-direction: column;
    }
  }
  @media (max-width: 575.98px) {
    padding: 0;
    .title {
      font-size: 8vw;
      line-height: 1;
    }
  }
`;

const Projects = () => {
  return (
    <StyledSection id="projects-start">
      <h2 className="title">Recent work and experiments</h2>
      <section className="projects">
        <SingleProject
          width="48"
          color="#a2f6cf"
          technologies={["HTML", "CSS", "React", "Express", "Javascript"]}
          icon={icon3}
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
          icon={icon2}
          technologies={["HTML", "CSS", "JS", "WordPress", "Elementor"]}
          color="#AEE8FA"
          year="2020"
          live="https://subsoutlet.com"
        >
          Production e-commerce website with third-party chatbot and auto
          license key delivery system.
        </SingleProject>
        <SingleProject
          title="Sanity E-commerce Store"
          width="100"
          icon={icon2}
          color="#f9f9f9"
          year="2022"
          technologies={["NextJs", "SanityIO", "Stripe", "Vercel"]}
          live="https://sanity-full-stack-e-commerce.vercel.app/"
          git="https://github.com/zaynchow/sanity-full-stack-e-commerce"
        >
          A web app implementing NextJs Server Side Rendering(SSR) and
          Incremental Server Side Regeneration(ISSR) for fast loading dynamic
          pages, easy scalability and better SEO. Made user-friendly and
          efficient using Sanity for content management and Stripe as a payment
          gateway.
        </SingleProject>
      </section>
    </StyledSection>
  );
};

export default Projects;
