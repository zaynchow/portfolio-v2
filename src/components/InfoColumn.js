import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33333%;
  h3 {
    font-size: 1.6rem;
    font-family: "Articulat Medium";
    line-height: 2;
  }
  @media (max-width: 799px) {
    h3 {
      font-size: 1.8rem;
      line-height: 2;
      white-space: nowrap;
      margin-top: 20px;
    }
    ul {
      li {
        line-height: 2;
      }
    }
  }
`;

const InfoColumn = ({ title, data }) => {
  return (
    <StyledSection>
      <h3>{title}</h3>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default InfoColumn;
