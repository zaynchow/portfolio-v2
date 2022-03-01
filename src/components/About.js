import React from "react";
import styled from "styled-components";
import me from "../assets/images/me.jpg";


const StyledSection = styled.section`
  width: 100%;
  max-width: 80vw;
  position: relative;
  margin: 0 auto;

  .heading {
    h2 {
      color: var(--white);
      flex-shrink: 0;
    }

    position: relative;

    display: flex;
    column-gap: 70px;
    justify-content: space-between;

    align-items: center;
    &:after {
      content: "";
      background: white;
      box-sizing: border-box;
      display: inline-block;
      height: 1px;
      width: 100%;
    }
  }
  section {
    color: var(--gray-1);
    padding-top: 40px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    .text {
      margin-right: 100px;
      ul {
        margin-top: 20px;
        position: relative;
        display: grid;
        grid-template-columns: 2fr 2fr;

        li {
          position: relative;
          margin-bottom: 10px;
          padding-left: 20px;
          &:before {
            content: "▹";
            position: absolute;
            left: 0px;
            color: var(--gradient);
            font-size: 1.5rem;
          }
        }
      }
    }
    #image {
      .picture {
        width: 400px;
        height: 400px;
        position: relative;
        /* position: absolute; */
        img {
          border-radius: 22px;
        }

        &:after {
          border: 2px solid #aee8fa;
          top: 20px;
          left: 20px;
          z-index: -1;
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
      }
    }
  }

  @media (max-width: 799px) {
    .heading {
      h2 {
        font-size: 3.5rem;
      }
    }
    section {
      display: block;
      max-width: 100% !important;
      padding: 0;
      .text {
        margin: 0;
      }
      #image {
        position: relative;
        display: inline-block;
        margin: 50px auto 0px;
        width: 70%;
      }
    }
  }
  @media (max-width: 575.98px) {
    #image {
      img {
        width: 80%;
      }
    }
  }
  section #image .picture:after {
    top: 10px;
    left: 10px;

    width: 80%;
  }
`;

const About = () => {
  return (
    <StyledSection>
      <div className="heading" id="about-start">
        <h2>About Me</h2>
      </div>
      <section>
        <div className="text">
          <p>
            Hello! My name is Zayn and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
            <br />
            <br />
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
            <br />
            <br />I also recently launched a course that covers everything you
            need to build a web app with the Spotify API using Node & React.
            JavaScript (ES6+) TypeScript React Eleventy Node.js WordPress
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
            <br />
          </p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div id="image">
          <div className="picture">
            <img src={me} alt="zayn chowdhury" />
          </div>
        </div>
      </section>
    </StyledSection>
  );
};

export default About;
