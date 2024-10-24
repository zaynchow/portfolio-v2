import React from "react";
import styled from "styled-components";




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

  .scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;

    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
    position: absolute;
    top: 90vh;
    animation: fly-in 0.75s linear 1 forwards;
    animation-delay: 1.5s;
    opacity: 0;
    @media (max-width: 575.98px) {
      width: var(--sizeX);
      height: var(--sizeY);
      top: 80vh;
    }
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Hero = ({ scrollRef }) => {
  return (
    <StyledSection>
      <h1>
        <span className="first-line">Hello, my name is</span>
        <br />
        <span className="big-text">Zayn Chowdhury</span>
      </h1>
      <div className="buttons">
        <a
          href="/Resume- Chowdhury Zayn Ud-Din Shams.pdf"
          download="Zayn's Resume"
        >
          Download Resume
        </a>
        <a href="mailto:zaynchow@student.ubc.ca">Get in touch</a>
      </div>

      <div
        className="scrolldown"
        onClick={() => scrollRef.current.scrollIntoView()}
      >
        <div className="chevrons"></div>
      </div>
    </StyledSection>
  );
};

export default Hero;
