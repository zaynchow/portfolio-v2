import React from "react";
import styled from "styled-components";

const StyledSection = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};

  align-items: flex-start;
  border-radius: 32px;
  margin-bottom: 32px;
  width: calc(${({ width }) => width}%);
  padding: 32px 32px 24px;
  hr {
    background-color: #6bd490;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 0;

    width: 100%;
  }
  .project-title {
    align-items: center;
    display: flex;
    margin-bottom: 8px;

    h3 {
      font-size: var(--font-m);
      color: #0f270c;
      margin-left: ${({ icon }) => (icon ? 8 : 0)}px;
      font-family: "Articulat Bold";
    }
    figure {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(${({ icon }) => icon});
      height: 20px;
      width: ${({ icon }) => (icon ? 22 : 0)}px;
      font-weight: "bold";
    }
  }
  span {
    display: block;
    font-size: var(--font-xsm);
    color: #0f270c;
    margin-bottom: 12px;
  }
  p {
    color: #0f270c !important;
    font-size: var(--font-xsm) !important;

    line-height: 2;
  }
  a {
    background-color: #0f270c;
    color: #fff;
    border-radius: 12px;
    padding: 1rem 1.2rem;
    font-size: 16px;
    display: inline-block;
    text-decoration: none;
    margin-top: 24px;
    margin-bottom: 8px;
    margin-right: 8px;
    font-family: "Articulat Medium";
  }
  ul {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    column-gap: 7px;
    list-style: inside;
    li {
      font-size: 14px;
      font-family: "SFMono Regular";
    }
  }
  @media (max-width: 799px) {
    width: calc(100%);
  }
`;

const SingleProject = ({
  title,
  year,
  color,
  width,
  technologies,
  children,
  live,
  git,
  icon,
}) => {
  return (
    <StyledSection color={color} width={width} icon={icon}>
      <div className="project-title">
        <figure class="image"></figure>
        <h3>{title}</h3>
      </div>
      <span>{year}</span>
      <hr />
      <p className="project-text">{children}</p>
      <ul>
        {technologies.map((technology) => (
          <li>{technology}</li>
        ))}
      </ul>

      <div>
        {live ? (
          <a href={live} target="_blank">
            Live Preview
          </a>
        ) : (
          ""
        )}
        {git ? (
          <a href={git} target="_blank">
            View on Github
          </a>
        ) : (
          ""
        )}
      </div>
    </StyledSection>
  );
};

SingleProject.defaultProps = {
  width: 48,
  color: "#a2f6cf",
  technologies: [],
};

export default SingleProject;
