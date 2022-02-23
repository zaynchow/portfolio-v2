import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const NavMenuStyles = styled.nav`
  .line {
    background-color: #484848;
    content: "";
    box-sizing: border-box;
    display:inline-block;
    height:1px;
    width: 80%;
    left:50%;

  }
  align-items:center;
  left:50%;
  top:84px;
  transform: translateX(-50%);
  width:100%;
  max-width: 1532px;
  position: absolute;
  z-index: 100;
  padding: 1rem 4rem;
  background: var(--dark-bg);
  display: flex;
  justify-content: space-between;
  column-gap: 80px;

  svg{
    max-width:100px;
    
  }
  ul {
    max-width: 1200px;
    margin-top: 0;
    min-width: 30%;
    text-align: center;

    li {
      display: inline-block;
      
      transition: 0.3s ease background-color;
      color: var(--white);

      
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem ;
      color: var(--white);
      &:focus{
        border-radius: 12px;
        box-shadow: 0 0 0 4px #000, 0 0 0 8px #fff !important;
        outline:none;
      }
 
    }
 
    }
    .active {
      color: var(--white);
    }
    .resume-btn{
      position: absolute;
      top: 20px;
      right: 16px;
      display: inline-block;
      outline: solid 2px white;
      cursor: pointer;
      font-family: "RobotoMono Regular";
      padding: 0.7rem 1.2rem;
      font-size: 1.7rem !important;
      color: var(--grey-1);
    }
    .mobile-menu-icon {
      position: absolute;
      right: 1em;
      top: 1em;
      width:4em;
      cursor: pointer;
      display: none;
      outline: none;
    }

    .closeNavIcon {
      display: none;
    }
    @media only screen and (max-width:900px){
      padding:0;
      .hide-item{
 
        transform: translateY(calc(-100% - var(--top)));
      }
      
      .mobile-menu-icon{
        display:block;
      }
      .navItems {
       
        --top: 1rem;
        transition: 0.5s ease transform;
        background-color:var(--deep-dark);
        padding: 2rem;
        padding-bottom: 5em;
        width:90%;
        max-width: 300px;
        border-radius: 12px;
        position:absolute;
        right:1em;
        top: var(--top);
        .closeNavIcon{
          display:block;
          width: 3rem;
          margin: 0 0 0 auto;
          cursor: pointer;
          *{
            pointer-events: none;
          }
        }
         li{
          display: block;
          margin-bottom:1rem;
        }
        .resume-btn{
          position: static;
          margin-top: 3rem;
        }
      }

  
    }
  }

`;

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 56">
        {" "}
        <g fill="#FFFFFF" fill-rule="nonzero">
          {" "}
          <path d="M24.536 0h41.716c7.101 0 10.797.963 14.168 2.77 3.37 1.808 6.015 4.46 7.818 7.84l.107.204C90.078 14.14 91 17.839 91 24.819v6.362l-.001.423c-.038 6.847-.995 10.473-2.761 13.786-1.803 3.38-4.448 6.032-7.818 7.84l-.203.107C76.9 55.075 73.211 56 66.252 56H24.748l-.422-.001C17.5 55.96 13.883 55 10.58 53.229c-3.37-1.807-6.015-4.46-7.818-7.84l-.107-.203C.94 41.894.02 38.236 0 31.394v-6.575C0 17.697.96 13.99 2.762 10.61 4.565 7.23 7.21 4.578 10.58 2.77l.203-.107C14.066.943 17.713.019 24.536 0zm.212 3.319h-.365c-5.907.028-9.17.73-12.242 2.378-2.794 1.498-4.967 3.677-6.46 6.478-1.66 3.113-2.358 6.42-2.372 12.46v6.912c.028 5.924.728 9.196 2.371 12.278 1.494 2.801 3.667 4.98 6.46 6.478 3.073 1.648 6.336 2.35 12.243 2.378h42.234c5.907-.028 9.17-.73 12.242-2.378 2.794-1.498 4.967-3.677 6.46-6.478 1.644-3.082 2.344-6.354 2.372-12.278V24.453c-.028-5.924-.728-9.196-2.371-12.278-1.494-2.801-3.667-4.98-6.46-6.478-3.105-1.665-6.403-2.364-12.425-2.378H24.748z"></path>{" "}
          <path d="M40.317 15.853H29.259l-.292.001c-2.685.022-4.26.356-5.815 1.178a8.39 8.39 0 00-3.5 3.46c-.86 1.592-1.192 3.207-1.192 6.039l.002.78.004.559c.045 4.358.34 6.045 1.186 7.61a8.39 8.39 0 003.5 3.46c1.61.851 3.243 1.18 6.107 1.18h11.058c.92 0 1.665-.738 1.665-1.648 0-.91-.745-1.647-1.665-1.647H29.259c-2.357 0-3.463-.222-4.536-.79a5.078 5.078 0 01-2.134-2.11l-.053-.1-.047-.095c-.496-1.037-.683-2.493-.698-6.64v-.56c0-2.329.224-3.422.798-4.484a5.078 5.078 0 012.134-2.11l.115-.059c1.02-.514 2.108-.722 4.298-.73h11.181c.92 0 1.665-.737 1.665-1.647s-.745-1.647-1.665-1.647zM51.558 15.853h11.058l.292.001c2.685.022 4.26.356 5.815 1.178a8.39 8.39 0 013.5 3.46c.846 1.565 1.181 3.151 1.192 5.893v.464l-.002.6c-.031 4.673-.317 6.417-1.19 8.03a8.39 8.39 0 01-3.5 3.461c-1.61.851-3.243 1.18-6.107 1.18H51.558c-.92 0-1.665-.738-1.665-1.648 0-.91.746-1.647 1.665-1.647h11.058c2.357 0 3.463-.222 4.537-.79a5.078 5.078 0 002.133-2.11l.053-.1.047-.095c.497-1.037.683-2.493.698-6.64l.001-.56c0-2.329-.224-3.422-.799-4.484a5.078 5.078 0 00-2.133-2.11l-.116-.059c-1.02-.514-2.108-.722-4.298-.73H51.56c-.92 0-1.666-.737-1.666-1.647s.746-1.647 1.665-1.647z"></path>{" "}
        </g>{" "}
      </svg>
      <div className="line"></div>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink to="/" onClick={() => setShowNav(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setShowNav(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setShowNav(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setShowNav(false)}>
            Contact
          </NavLink>
        </li>
        {/* <li>
          <a className="resume-btn" href="/">
            Download Resume
          </a>
        </li> */}
      </ul>
    </NavMenuStyles>
  );
};
export default Header;
