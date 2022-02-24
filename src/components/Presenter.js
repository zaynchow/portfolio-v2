import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollContainerContext,
  ScrollPageContext,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
`;

const FlexCenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <StyledSection>
      <ScrollContainer>
        <ScrollPage page={}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px", color: "white" }}>
              Let's me show you scroll animation 😀
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </StyledSection>
  );
};

export default Presenter;
