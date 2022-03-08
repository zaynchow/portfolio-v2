import React from "react";
import styled from "styled-components";

const size = 25;
const speed = 3;
const peakopacity = 0.7;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 100vh;
  h1 {
    color: var(--white);

    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1;
    margin-top: 40vh;
    max-width: 80%;
    text-align: center;
  }

  .big-text {
    font-size: 9vw;

    background: linear-gradient(
      90deg,
      #d66761 16.66666%,
      #f5c0b2 33.33333%,
      #aee8fa 50%,
      #68bde7 66.66666%,
      #6bd490 83.33333%,
      #a2f6cf
    );
    opacity: 0;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 150%;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 6s ease-in-out infinite alternate,
      fly-in 1s linear 1;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    font-family: "Articulat Extra Bold";
    display: inline-block;
    margin-top: 1rem;
  }

  .first-line {
    animation: fly-in 0.5s linear 1;
    font-size: 3vw;
    font-family: "Articulat Extra Bold";
  }

  .buttons {
    opacity: 0;
    display: flex;
    max-width: 500px;
    column-gap: 50px;
    margin-top: 30px;
    animation: fly-in 0.75s linear 1 forwards;
    animation-delay: 1.3s;

    a {
      padding: 10px 20px;
      width: 400px;
      border: solid 2px #fff;
      border-radius: 20px;
      text-align: center;
      color: var(--white);
    }
  }

  .arrows {
    position: absolute;
    top: 90vh;
    animation: fly-in 0.75s linear 1 forwards;
    animation-delay: 1.3s;
    opacity: 0;

    width: ${size}px;
    height: ${size}px;
    transform: translate(-50%, -50%);
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: ${size / 3}px solid rgba(255, 255, 255, ${peakopacity});
      border-bottom: ${size / 3}px solid rgba(255, 255, 255, ${peakopacity});
      transform: translate(${size / 3}px, ${(size * 4) / 3}px) rotate(-45deg);
      animation: arrows ${speed}s linear infinite;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: ${size / 3}px solid rgba(255, 255, 255, ${peakopacity});
      border-bottom: ${size / 3}px solid rgba(255, 255, 255, ${peakopacity});
      transform: translate(${(size * 2) / 3}px, 0px) rotate(-45deg);
      animation: arrows ${speed}s linear infinite ${speed / -2}s;
    }
  }

  @keyframes arrows {
    0% {
      border-left: ${size / 3}px solid rgba(255, 255, 255, 255);
      border-bottom: ${size / 3}px solid rgba(255, 255, 255, 255);
      transform: translate(${size / -6}px, ${(size * 4) / -6}px) rotate(-45deg);
    }
    10%,
    90% {
      border-left: ${size / 3}px solid rgba(255, 255, 255, 255);
      border-bottom: ${size / 3}px solid rgba(255, 255, 255, 255);
    }
    50% {
      border-left: ${size / 3}px solid rgba(0, 0, 0, ${peakopacity});
      border-bottom: ${size / 3}px solid rgba(0, 0, 0, ${peakopacity});
      transform: translate(${size / -6}px, 0px) rotate(-45deg);
    }
    100% {
      border-left: ${size / 3}px solid rgba(255, 255, 255, 255);
      border-bottom: ${size / 3}px solid rgba(255, 255, 255, 255);
      transform: translate(${size / -6}px, ${(size * 4) / 6}px) rotate(-45deg);
    }
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes fly-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 799px) {
    min-height: 100vh;
    h1 {
      margin-top: calc(35vh);
    }

    .first-line {
      font-size: 5vw;
      letter-spacing: -1px;
    }
    .big-text {
      font-size: 12vw;
      letter-spacing: -1px;
    }
    .buttons {
      column-gap: 20px;
      max-width: 75%;
    }
  }
  @media (max-width: 575.98px) {
    h1 {
      padding: 0;
      max-width: initial;
    }
    .big-text {
      font-size: 14vw;
    }
    .buttons {
      column-gap: 20px;

      row-gap: 20px;
      flex-direction: column;
      max-width: inherit;
      a {
        max-width: 40%;
        margin: 0 auto;

        font-size: 1.3rem;
        padding: 5px 5px;
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledSection>
      <h1>
        <span className="first-line">Hello, my name is</span>
        <br />
        <span className="big-text">Zayn Chowdhury</span>
      </h1>
      <div className="buttons">
        <a
          href="/Resume - Chowdhury Zayn Ud-Din Shams.pdf"
          download="Zayn's Resume"
        >
          Download Resume
        </a>
        <a href="mailto:zaynchow@student.ubc.ca">Get in touch</a>
      </div>
      <div className="arrows"></div>
    </StyledSection>
  );
};

export default Hero;
