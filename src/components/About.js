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
  }
  #image {
    .picture {
      width: 400px;
      height: 400px;
      position: relative;
      img {
        border-radius: 22px;
      }

      &:after {
        border: 2px solid #aee8fa;
        top: 15px;
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

    section #image .picture:after {
      top: 10px;
      left: 10px;

      width: 80%;
    }
  }
`;

const About = ({ scrollRef }) => {
  return (
    <StyledSection ref={scrollRef}>
      <div className="heading" id="about-start">
        <h2>About Me</h2>
      </div>
      <section>
        <div className="text">
          <p>
            Hello! My name is Zayn, and I enjoy creating things that live on the
            internet. My interest in web development started back in 2019 when I
            first used the browser's developer tools to remove a popup that was
            blocking the main content in a blog site — turns out playing around
            with page elements, using dev tools, to see how those change with
            changes to texts and style properties, taught me a lot about HTML &
            CSS!
            <br />
            <br />
            Fast-forward to today, and I've self-taught myself all the tools
            needed to make a custom production web app using different tech
            stacks. These days, my main focus is systematically building
            extensible and maintainable programs with fast and clean algorithms.
            <br />
            <br />I recently launched my startup in Bangladesh, Deep Blue
            Creatives, which focuses on providing clients with exceptional web
            design and development solutions and result-driven marketing
            solutions for thriving businesses.
            <br />
            <br />
            My most recent project is a Spotify analytics web app using React,
            Node, Express, which uses the Spotify API to provide the user with
            personalised Spotify data to view their top tracts, sort them with
            time, filter them based on certain conditions, e.t.c.
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
