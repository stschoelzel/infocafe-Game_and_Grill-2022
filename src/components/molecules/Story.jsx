import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { theme } from "../../theme";

const Container = styled.div`
  position: relative;
  padding: ${isMobile() ? 1 : 2}rem;
  display: flex;
  flex-direction: column;
  background: black;
box-shadow: 0px 0px 5px 3px rgba(0,0,0,1);
   font-family: 'Source Code Pro', monospace;
    color:lime;
  font-weight:normal;

`;

const Border =  styled.div`
  padding:1rem;
  margin: 2rem 0;
  border-radius:.5rem;
  background:#bcbda9;
  box-shadow: inset 3px 3px 2px 0px rgba(255,255,255,.6),inset -3px -3px 2px 0px rgba(0,0,0,.3), 0px 2px 10px 0px rgba(0,0,0,.5),0px 5px 10px 0px rgba(0,0,0,.5);
`;


export const Story = ({ children, style }) => {
  return (
    <Border>

    <Container style={style}>

      {/* <Corner src="/img/screw.png" />
      <Corner2 /> */}
      {children} <div id="cursor"></div>
    </Container>
      </Border>
  );
};
