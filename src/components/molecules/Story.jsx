import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { theme } from "../../theme";

const Container = styled.div`
  position: relative;
  padding: ${isMobile() ? 1.5 : 3}rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  background:white;
  margin:2rem 0;
  box-shadow: 5px 5px 5px rgba(255, 127, 127,.1), -5px -5px 5px rgba(255, 127, 127,.1), 5px -5px 0px rgba(255, 127, 127,.1), -5px 5px 0px rgba(255, 127, 127,.1);
  background-image: url("/img/alu3.jpg");
  &:first-letter {
    font-size: 3rem;
    line-height: 1;
    font-family: Roboto;
    float: left;
    font-weight: ;
    color: ${theme.primary};
    text-shadow: ${theme.textShadow};
    padding-right: 0.125em;
  }

  ul {
    padding-left: 1rem;
  }
`;

const Corner = styled.div`
  position: absolute;
  height: 2rem;
  width: 6rem;
  top:.1rem;
  left:-2rem;
  transform:rotate(-45deg);
  background-image: url("/img/tape1.png");
`;

const Corner2 = styled.div`
  position: absolute;
  height: 2rem;
  width: 6rem;
  bottom:.1rem;
  right:-1.4rem;
  transform:rotate(-45deg);
  background-image: url("/img/tape2.png");
`;
export const Story = ({ children, style }) => {
  return (
    <Container style={style}>
      {/* <CornerBL />
      <CornerBR />
      <CornerTL />
      <CornerTR />
      <Corner/>
      <Corner2/> */}
      {children}
    </Container>
  );
};
