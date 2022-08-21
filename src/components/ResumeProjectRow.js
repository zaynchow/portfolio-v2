import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  border-top: 1px solid #c4c4c4;
  display: flex;
  margin-bottom: 48px;
  padding-top: 48px;
  width: 100%;

  .work-rows--title {
    width: 33.33333%;
    a {
      font-size: 2.4rem;
      font-family: "Articulat Bold";
      margin-bottom: 4px;
      line-height: 1;
      color: inherit;
    }
  }
  .work-rows--description {
    width: 66.66666%;
  }
  h4 {
    font-family: "Articulat Bold";
    font-size: 1.6rem;
    line-height: 2;
  }
  @media (max-width: 799px) {
    flex-direction: column;
    .work-rows--title {
      width: 100%;
      display: block;
    }

    .work-rows--description {
      width: 100%;
      margin-top: 1.6rem;
    }
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
    .work-rows--title {
      width: 100%;
      display: block;
    }
  }
`;

const ResumeProjectRow = ({ title, desc, year, link }) => {
  return (
    <StyledSection>
      <div className="work-rows--title">
        <h3>
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
        <span>{year}</span>
      </div>
      <div className="work-rows--description">
        <p>{desc}</p>
      </div>
    </StyledSection>
  );
};

export default ResumeProjectRow;
