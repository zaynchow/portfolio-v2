import React from "react";
import styled from "styled-components";
import {
  Header,
  Footer,
  InfoColumn,
  ResumeSectionTitle,
  ResumeProjectRow,
} from "../components";
import skills from "../assets/data/skills";
import education from "../assets/data/education";
import projects from "../assets/data/projects";
import work from "../assets/data/work";

const StyledMain = styled.main`
  color: #242424;
  display: flex;
  flex-direction: column;
  font-family: "Articulat Regular";
  /* margin-bottom: 192px; */

  margin: 0 auto;
  margin-top: 240px;
  max-width: 85vw;
  padding: 1rem 4rem;
  .resume-intro {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    a {
      color: #242424;
      font-size: 2.3rem;
      position: relative;
      text-decoration: none;
      font-family: "Articulat Medium";
      z-index: 1;
      &:focus {
        box-shadow: 0 0 0 4px #f9f9f9, 0 0 0 8px #000;
        background-color: rgba(36, 36, 36, 0.1);
        border-radius: 12px;
      }
    }
    p {
      font-size: 2.3rem;
      line-height: 1.5;
      margin-bottom: 48px;
      margin-top: 48px;
      max-width: 800px;
    }
  }
  .resume--skills {
    margin-bottom: 48px;

    .skill-groups {
      border-top: 1px solid #c4c4c4;
      display: flex;
      padding-top: 48px;
    }
  }
  .resume--education {
    margin-bottom: 48px;

    .education-columns {
      border-top: 1px solid #c4c4c4;
      display: flex;
      padding-top: 48px;
    }
    .education-columns--item {
      display: flex;
      flex-direction: column;
      width: 33.33333%;
      h3 {
        font-size: 2.4rem;
        margin-bottom: 4px;
        font-family: "Articulat Bold";
        line-height: 1;
      }
    }
  }
  .resume--work {
    .work-rows {
      display: flex;
      flex-direction: column;
      padding-bottom: 10vh;
    }
  }
  @media (max-width: 799px) {
    margin-top: 108px;
    padding: 0 20px;
    .resume-intro {
      h1 {
        font-size: 36px;
        margin-bottom: 8px;
      }
    }
    .resume--skills .skill-groups {
      flex-direction: column;
      padding-top: 0px;
    }
    .resume--education {
      .education-columns {
        flex-direction: column;
        .education-columns--item {
          h3 {
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media (max-width: 575.98px) {
    margin: 0 0;
    max-width: 100%;
    margin-top: 150px;
    padding: 0 0px;
    .resume-intro {
      h1 {
        line-height: 1;
        white-space: pre-wrap;
      }
    }
  }
`;

const Resume = () => {
  document.body.style = "background: #f9f9f9";
  return (
    <StyledMain>
      <Header />
      <section className="resume-intro">
        <h1>Chowdhury Zayn Ud-Din Shams</h1>
        <a href="https://github.com/zaynchow">github.com/zaynchow</a>
        <p>
          A creative web developer with a passion for design, animation,
          interaction, problem-solving, and for mastering the latest
          front-end&nbsp; & back-end technologies .
        </p>
      </section>
      <section className="resume--skills">
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <div className="skill-groups">
          {skills.map((item) => (
            <InfoColumn title={item.title} data={item.data} />
          ))}
        </div>
      </section>
      <section className="resume--education">
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <div className="education-columns">
          <div className="education-columns--item">
            <h3>
              University of British
              {(window.screen.width > 799 && <br />) ||
                (window.screen.width < 575 && <br />)}
              Columbia
            </h3>
            <span>2020 – Present</span>
          </div>
          {education.map((item) => (
            <InfoColumn title={item.title} data={item.data} />
          ))}
        </div>
      </section>
      <section className="resume--work">
        <ResumeSectionTitle>Projects</ResumeSectionTitle>
        <div className="work-rows">
          {projects.map((item) => (
            <ResumeProjectRow
              title={item.title}
              desc={item.description}
              year={item.year}
              link={item.link}
            />
          ))}
        </div>
      </section>
      <section className="resume--work">
        <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
        <div className="work-rows">
          {work.map((item) => (
            <ResumeProjectRow
              title={item.title}
              desc={item.description}
              year={item.year}
            />
          ))}
        </div>
      </section>
      <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_nzuitqg1.json"></lottie-player>
      <Footer />
    </StyledMain>
  );
};

export default Resume;
