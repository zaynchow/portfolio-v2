import React from "react";
import styled from "styled-components";
import me from "../assets/images/me.jpg";

const StyledSection = styled.section`
  margin-top: 20vh;
  height: 100vh;
  width: 100%;
  max-width: 1532px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 15rem;
  h2 {
    color: #aee8fa;
    position: relative;

    display: flex;
    justify-content: space-between;
    font-size: 60px;
    align-items: center;
    &:after {
      content: "";
      background: white;
      box-sizing: border-box;
      display: inline-block;
      height: 1px;
      width: 77%;
    }
  }
  section {
    padding-top: 40px;
    display: grid !important;
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
        position: absolute;
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
`;

const About = () => {
  return (
    <StyledSection>
      <h2>About Me</h2>

      <section>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
            odit corrupti excepturi, magni aliquid architecto mollitia expedita
            obcaecati rerum voluptatibus debitis ex ab tenetur dolores suscipit
            quas aperiam laboriosam. Exercitationem pariatur ipsum repellendus
            unde nihil minima dolore repellat doloremque atque in placeat
            suscipit eum laboriosam alias animi nam voluptate, beatae magni
            aspernatur molestias amet. Eos autem velit praesentium
            necessitatibus?
            <br />
            <br />
            Ducimus reiciendis neque ab voluptatem pariatur impedit nisi nulla
            harum! Vero rem quod debitis eius eum harum inventore repudiandae
            neque a vel, cum ipsa consequuntur. Nam et tenetur odio neque.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            soluta sapiente dolorem, necessitatibus dolorum beatae itaque
            corrupti eveniet cum rerum perferendis eius, doloremque sunt culpa
            quas laudantium quaerat qui ipsam! Minus, quam voluptates quaerat
            nostru
          </p>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Java</li>
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
