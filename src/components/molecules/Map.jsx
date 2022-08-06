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
  border: 0.1rem solid ${theme.lime};
  margin: 0rem -3rem 2rem -3rem;
  align-self: center;
  /* background-color: ${theme.secondary}; */
`;
export const Map = ({ src, style }) => {
  return (
    <Container style={style}>
      <div style={{ position: "absolute", height: "100%", width: "100%" }} onScroll={e => e.stopPropagation()}>
        <PinchZoomPan position="center" zoomButtons={false}>
          
          <img alt="Karte" src={src} />
            
        </PinchZoomPan>
      </div>
    </Container>
  );
};
