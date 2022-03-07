import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const NavMenuStyles = styled.nav`
  .line {
    background-color: #484848;
    content: "";
    box-sizing: border-box;
    display: inline-block;
    height: 1px;
    width: 80%;
    left: 50%;
  }
  align-items: center;
  left: 50%;
  top: 84px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 85vw;
  position: absolute;

  padding: 1rem 4rem;
  background: ${(props) => (props.color === "dark" ? "black" : "#f9f9f9")};
  display: flex;
  justify-content: space-between;
  column-gap: 80px;
  z-index: 10;
  .logo {
    max-width: 200px;
  }
  ul {
    max-width: 1200px;
    margin-top: 0;
    min-width: 30%;
    text-align: center;
    flex-shrink: 0;

    li {
      display: inline-block;

      transition: 0.3s ease background-color;
      color: var(--white);
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: ${(props) => (props.color === "dark" ? "white" : "black")};
      &:focus {
        border-radius: 12px;
        box-shadow: 0 0 0 4px #000, 0 0 0 8px #fff !important;
        outline: none;
      }
    }
  }
  .active {
    color: ${(props) => (props.color === "dark" ? "white" : "black")};
  }

  .hamburger {
    display: none;
  }

  @media only screen and (max-width: 799px) {
    top: 20px;
    padding: 0 0px;

    .logo {
      border-radius: 16px;
      height: 100px;
      margin-right: 32px;
      width: 90px;
    }
    .line {
      visibility: hidden;
    }

    .hide-item {
      transform: scale(0) !important;

      visibility: hidden !important;
    }
    .mobile-menu-icon {
    }
    .navItems {
      transform: scale(1);
      visibility: visible;
      transition: transform 0.5s cubic-bezier(0.5, 1, 0.5, 1),
        visibility 0.2s linear 0.4ms;

      transform-origin: top right;

      background-color: ${(props) =>
        props.color === "dark" ? "#f9f9f9" : "var(--deep-dark)"};
      padding-top: 3rem;
      padding-left: 5rem;
      padding-right: 5rem;

      top: 0px;
      right: -7px;

      max-width: 300px;
      border-radius: 12px;
      position: absolute;

      .closeNavIcon {
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
        a {
          color: ${(props) =>
            props.color === "dark" ? "var(--deep-dark)" : "#f9f9f9"};
        }
      }
    }
    .hamburger {
      display: block;
      z-index: 100;
    }
    .menu-bar1,
    .menu-bar2,
    .menu-bar3 {
      width: 3.5rem;
      height: 0.2rem;
      background-color: ${(props) =>
        props.color === "dark" ? "#fff" : "#000"};
      margin: 0.8rem 0;
      transition: 0.7s;
      display: block;
    }

    .menu-bar2 {
      width: 2rem;
      margin-left: auto;
    }

    /* ROTATE FIRST BAR */
    .active .menu-bar1 {
      transform: rotate(-45deg) translate(-7px, 8px);
      /* transform: rotate(-45deg) translate(-0.7rem, 0.8rem); */
      background-color: ${(props) =>
        props.color === "dark" ? "black" : "#fff"};
    }

    /* FADE OUT SECOND BAR */
    .active .menu-bar2 {
      opacity: 0;
    }

    /* ROTATE LAST BAR */
    .active .menu-bar3 {
      transform: rotate(45deg) translate(-6px, -8px);
      /* transform: rotate(45deg) translate(-0.6rem, -0.8rem); */
      background-color: ${(props) =>
        props.color === "dark" ? "black" : "#fff"};
    }
  }
  @media (max-width: 575.98px) {
    .navItems {
      top: 20px;
      right: -10px;
    }
  }
`;

const Header = ({ color }) => {
  const [showNav, setShowNav] = useState(false);
  const anchor = document.querySelector("#projects-start");

  return (
    <NavMenuStyles color={color}>
      <a href="/" className="logo">
        <svg
          className="logo"
          viewBox="129.413 172.143 224.639 130.935"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="a">
              <path d="M 216 140 L 259.839844 140 L 259.839844 214 L 216 214 Z M 216 140" />
            </clipPath>
            <clipPath id="b">
              <path d="M 157 114 L 215 114 L 215 240.253906 L 157 240.253906 Z M 157 114" />
            </clipPath>
          </defs>
          <path
            fill={color === "dark" ? "white" : "black"}
            fill-rule="nonzero"
            d="M 13.057 10.726 L 59.461 10.726 C 67.361 10.726 71.472 11.689 75.222 13.496 C 78.972 15.304 81.914 17.956 83.92 21.336 L 84.038 21.54 C 85.966 24.866 86.992 28.565 86.992 35.545 L 86.992 41.907 L 86.991 42.33 C 86.948 49.177 85.883 52.803 83.92 56.116 C 81.914 59.496 78.972 62.148 75.222 63.956 L 74.997 64.063 C 71.307 65.801 67.203 66.726 59.461 66.726 L 13.292 66.726 L 12.823 66.725 C 5.23 66.686 1.207 65.726 -2.469 63.955 C -6.217 62.148 -9.159 59.495 -11.165 56.115 L -11.284 55.912 C -13.192 52.62 -14.215 48.962 -14.237 42.12 L -14.237 35.545 C -14.237 28.423 -13.17 24.716 -11.165 21.336 C -9.159 17.956 -6.217 15.304 -2.469 13.496 L -2.242 13.389 C 1.41 11.669 5.467 10.745 13.057 10.726 Z M 13.292 14.045 L 12.886 14.045 C 6.315 14.073 2.685 14.775 -0.732 16.423 C -3.84 17.921 -6.257 20.1 -7.918 22.901 C -9.764 26.014 -10.541 29.321 -10.556 35.361 L -10.556 42.273 C -10.526 48.197 -9.747 51.469 -7.919 54.551 C -6.257 57.352 -3.84 59.531 -0.733 61.029 C 2.685 62.677 6.315 63.379 12.886 63.407 L 59.867 63.407 C 66.439 63.379 70.069 62.677 73.485 61.029 C 76.594 59.531 79.012 57.352 80.673 54.551 C 82.501 51.469 83.28 48.197 83.311 42.273 L 83.311 35.179 C 83.28 29.255 82.501 25.983 80.674 22.901 C 79.012 20.1 76.594 17.921 73.487 16.423 C 70.033 14.758 66.364 14.059 59.665 14.045 L 13.292 14.045 Z"
            transform="matrix(2.219114, 0, 0, 2.338131, 161.006668, 147.064636)"
          />
          <path
            fill={color === "dark" ? "white" : "black"}
            fill-rule="nonzero"
            d="M 19.16 55.179 C 18.628 55.179 18.095 54.987 17.688 54.6 L 1.849 39.552 L 17.688 24.503 C 18.501 23.729 19.82 23.729 20.633 24.503 C 21.446 25.274 21.446 26.527 20.633 27.301 L 7.741 39.552 L 20.633 51.801 C 21.446 52.573 21.446 53.826 20.633 54.6 C 20.226 54.987 19.693 55.179 19.16 55.179"
            transform="matrix(2.219114, 0, 0, 2.338131, 161.006668, 147.064636)"
          />
          <g
            clip-path="url(#a)"
            transform="matrix(0.999999, 0, 0, 1, 58.079212, 62.350621)"
          >
            <path
              fill={color === "dark" ? "white" : "black"}
              fill-rule="nonzero"
              d="M 221.253906 213.730469 C 220.070312 213.730469 218.886719 213.28125 217.984375 212.375 C 216.179688 210.566406 216.179688 207.636719 217.984375 205.832031 L 246.59375 177.191406 L 217.984375 148.546875 C 216.179688 146.738281 216.179688 143.808594 217.984375 142.003906 C 219.789062 140.195312 222.714844 140.195312 224.519531 142.003906 L 259.667969 177.191406 L 224.519531 212.375 C 223.617188 213.28125 222.433594 213.730469 221.253906 213.730469"
            />
          </g>
          <g
            clip-path="url(#b)"
            transform="matrix(0.999999, 0, 0, 1, 58.079212, 62.350621)"
          >
            <path
              fill={color === "dark" ? "white" : "black"}
              fill-rule="nonzero"
              d="M 162.613281 240.261719 C 162.039062 240.261719 161.457031 240.15625 160.890625 239.925781 C 158.523438 238.976562 157.375 236.28125 158.328125 233.910156 L 205.257812 117.019531 C 206.210938 114.648438 208.902344 113.5 211.269531 114.453125 C 213.640625 115.402344 214.789062 118.097656 213.835938 120.472656 L 166.902344 237.359375 C 166.179688 239.167969 164.445312 240.261719 162.613281 240.261719"
            />
          </g>
        </svg>
      </a>
      <div className="line"></div>

      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <li>
          <NavLink to="/" onClick={() => setShowNav(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={() => setShowNav(false)}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#projects-start"
            onClick={() => {
              setShowNav(false);
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a
            href="mailto:zaynchowdhury763@gmail.com"
            onClick={() => setShowNav(false)}
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        className={showNav ? "hamburger active" : "hamburger"}
        onClick={() => setShowNav(!showNav)}
      >
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>
    </NavMenuStyles>
  );
};
export default Header;
