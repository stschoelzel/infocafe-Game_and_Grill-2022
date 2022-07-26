import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { motion } from "framer-motion";
import { theme } from "../../theme";
const Heading = styled(motion.div)`
  margin-top: 2rem;
  position: relative;
  font-family: Permanent Marker;
  opacity: 0.9;
  white-space: nowrap;
  margin-bottom: 4rem;
  color: ${theme.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const R = styled.div`
  position: absolute;
  top: ${(p) => p.f * 1}rem;
  right: ${(p) => p.f * -4.5}rem;
  font-size: ${(p) => p.f * 8}rem;
`;
const Sommer = styled.div`
  color: ${theme.primary};
  margin-bottom: ${(p) => p.f * -4}rem;
  font-size: ${(p) => p.f * 6}rem;
`;
const Sommer2 = styled.div`
  color: ${theme.primary};
  margin-bottom: ${(p) => p.f * -4}rem;
  font-size: ${(p) => p.f * 8}rem;
`;
const A = styled.div`
  position: absolute;
  top: ${(p) => p.f * 1}rem;
  left: ${(p) => p.f * -6.3}rem;
  font-size: ${(p) => p.f * 8}rem;
`;
const Benteue = styled.div`
  font-size: ${(p) => p.f * 5}rem;
  transform: rotate(-3deg);
`;

export const Logo = ({ size = 1, responsive = true }) => {
  let f;
  if (responsive) {
    if (isMobile()) {
      f = 0.5;
    } else {
      f = 1;
    }
  } else {
    f = size;
  }
  return (
    <Heading
      f={f}
      transition={{
        duration: 8,
        ease: "easeInOut",
        loop: Infinity,
      }}
      animate={{
        textShadow: [
          `0px 0px 15px rgba(${theme.accent[0]}, ${theme.accent[1]}, ${theme.accent[2]}, 0.4)`,
          `0px 0px 20px rgba(${theme.accent[0]}, ${theme.accent[1]}, ${theme.accent[2]}, .6)`,
          `0px 0px 15px rgba(${theme.accent[0]}, ${theme.accent[1]}, ${theme.accent[2]}, 0.4)`,
        ],
      }}
    >
      <Sommer f={f}>2021</Sommer>
      <Benteue f={f}>Game'n'Grill</Benteue>
      <Sommer2 f={f}>ELEMENTS</Sommer2>
    </Heading>
  );
};
