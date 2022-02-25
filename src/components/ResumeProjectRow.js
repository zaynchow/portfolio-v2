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
    h3 {
      font-size: 2.4rem;
      font-family: "Articulat Bold";
      margin-bottom: 4px;
      line-height: 1;
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
`;

const ResumeProjectRow = ({ title, desc, year }) => {
  return (
    <StyledSection>
      <div className="work-rows--title">
        <h3>{title}</h3>
        <span>{year}</span>{" "}
      </div>
      <div className="work-rows--description">
        <p>{desc}</p>
      </div>
    </StyledSection>
  );
};

export default ResumeProjectRow;
