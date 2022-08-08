import styled from "styled-components";
import { theme } from "../../theme";

export const borderColor = "#3a3a8a";

export const H3 = styled.div`
  font-family: Oxanium;
  opacity: 0.9;
  text-align: center;
  color: ${theme.secondary};
  font-size: 2rem;
  margin: 1rem;
  text-shadow: -1px -1px 0 ${borderColor}, 1px -1px 0 ${borderColor},
    -1px 1px 0 ${borderColor}, 1px 1px 0 ${borderColor}, ${theme.textShadow};
`;
