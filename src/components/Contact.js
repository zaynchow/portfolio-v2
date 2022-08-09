import React from "react";
import styled from "styled-components";


const StyledSection = styled.section`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 50px;
  h1 {
    color: var(--white);
    font-size: 9rem;
    line-height: 1;
    /* background-image: url("https://i.stack.imgur.com/kUbWj.jpg") !important; */
    background: linear-gradient(
      90deg,
      #d66761 16.66666%,
      #f5c0b2 33.33333%,
      #aee8fa 50%,
      #68bde7 66.66666%,
      #6bd490 83.33333%,
      #a2f6cf
    );
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 10s ease-in-out infinite alternate,
      fly-in 2s linear 1;
  }
  a {
    padding: 10px 20px;
    min-width: 250px;
    max-width: 30vw;
    border: solid 2px #fff;
    border-radius: 20px;
    text-align: center;
    color: var(--white);
  }
  @media (max-width: 799px) {
    h1 {
      font-size: 12vw;
      letter-spacing: -1px;
    }
  }
  @media (max-width: 575.98px) {
    h1 {
      font-size: 10vw;
    }
    a {
      max-width: initial;
      margin: 0 auto;
      min-width: initial;
      font-size: 1.5rem;
      padding: 10px 30px;
      white-space: nowrap;
      text-align: center;
    }
  }
`;

const Contact = () => {
  return (
    <StyledSection>
      <h1>
        and I'd love to
        <br /> work with you
      </h1>
      <a href="mailto:zaynchowdhury763@gmail.com">Contact Me</a>
    </StyledSection>
  );
};

export default Contact;
