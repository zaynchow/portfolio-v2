import React from "react";
import styled from "styled-components";

const size = 50;
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
    color: #fff;
    font-size: 96px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
    margin-top: 320px;
    max-width: 850px;
    text-align: center;
    z-index: 1;
  }
  .big-text {
    font-size: 150px !important;
  }

  .big-text {
    background-image: url("https://i.stack.imgur.com/kUbWj.jpg") !important;
    opacity: 0;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 10s ease-in-out infinite alternate,
      fly-in 2s linear 1;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  .first-line {
    animation: fly-in 1s linear 1;
  }

  .arrows {
    position: absolute;
    top: 90vh;

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
`;

const Hero = () => {
  return (
    <StyledSection>
      <h1>
        <span className="first-line">Hello there,</span>
        <br />
        <span className="big-text">
          I'm <span>Zayn</span>
        </span>
      </h1>
      <div>
        <canvas></canvas>
      </div>
      <div className="arrows"></div>
    </StyledSection>
  );
};

export default Hero;
