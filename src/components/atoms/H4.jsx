import styled from "styled-components";
import { theme } from "../../theme";
import { borderColor } from "./H3";

export const H4 = styled.div`
  font-family: Oxanium;
  opacity: 0.9;
  font-size: 1.5rem;
  text-align: center;
  color: ${theme.secondary};
  margin-bottom: 2rem;
  text-shadow: ${theme.textShadow};
  text-shadow: -1px -1px 0 ${borderColor}, 1px -1px 0 ${borderColor},
    -1px 1px 0 ${borderColor}, 1px 1px 0 ${borderColor}, ${theme.textShadow};
`;
