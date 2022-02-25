import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  h2 {
    font-family: "Articulat Bold";
    font-size: 1.6rem;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;
const ResumeSectionTitle = (props) => {
  return (
    <StyledSection>
      <h2>{props.children}</h2>
    </StyledSection>
  );
};

export default ResumeSectionTitle;
