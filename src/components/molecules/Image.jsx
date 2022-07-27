import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  flex: auto;
  overflow: hidden;
  position: relative;
  height: 600px;
  height: min(70vw, 600px);
  min-height: min(70vw, 600px);
  width: calc(85% + 6rem);
  border: 0.5rem solid ${theme.secondary};
  margin: 0rem -3rem 2rem -3rem;
  background-color: ${theme.secondary};
  box-shadow: 0px 5px 0.5rem 0px rgba(50, 0, 0, 0.6),
    inset 0px 0px 0.5rem 0px rgba(0, 0, 0, 0.6);
`;


export const Image = ({ src, style, text}) => {
  return (
    <Container style={style}>
      <figure>
          <img
          src={src}
          style={{ alignSelf: "center", margin: "0", width:"100%" }}
          />
          <figcaption style={{fontSize:10}}>{text}</figcaption>
      </figure>
    </Container>
  );
};
