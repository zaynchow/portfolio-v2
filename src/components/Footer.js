import styled from "styled-components";

const StyledSection = styled.section`
  color: grey;
  display: flex;
  font-family: "Articulat Regular";
  font-size: 12px;
  justify-content: center;
  letter-spacing: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  max-width: 1532px;
  margin: 0px auto;
  padding: 0px 84px;
  height: 5vh;
  &:before {
    background-color: rgb(196, 196, 196);
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0px;
    width: calc(80%);
  }
  small {
    padding: 10px 0;
  }

  @media (max-width: 575.98px) {
    width: 100%;
    small {
      font-size: 80%;
      white-space: nowrap;
    }
  }
`;

const Footer = () => {
  return (
    <StyledSection>
      <small>© 2022 Designed & Built by Chowdhury Zayn Ud-Din Shams</small>
    </StyledSection>
  );
};

export default Footer;
