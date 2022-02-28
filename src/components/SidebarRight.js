import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.article`
  animation: fly-in 0.75s linear 1 forwards;
  animation-delay: 2s;
  opacity: 0;
  position: fixed;
  bottom: 0px;
  right: 40px !important;
  width: 40px;
  z-index: 10;
  a {
    transform: rotate(90deg) translateX(-50%);
    cursor: pointer;
    font-size: 20px;
    display: inline-block;

    color: var(--gray-1);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 110px;
    margin: 0px auto;
    background-color: var(--gray-1);
  }

  @media (max-width: 799px) {
    visibility: hidden;
  }
`;

const SidebarRight = () => {
  return (
    <StyledSidebar>
      <a href="mailto:zaynchowdhury763@gmail.com">zaynchowdhury763@gmail.com</a>
    </StyledSidebar>
  );
};

export default SidebarRight;
