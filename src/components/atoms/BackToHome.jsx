import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

const BacktoHomeLink = styled(Link)`
  font-family: Permanent Marker;
  font-size: ${(p) => p.f * 5}rem;
  transform: rotate(-3deg);
  color: ${theme.secondary};
  text-shadow: ${theme.textShadow};
    &:hover {
      color: ${theme.primary};
      transform: rotate(0);
    },
`;

export const BackToHome = () => {
  return <BacktoHomeLink to="/">Zurück zur Hauptseite</BacktoHomeLink>;
};
