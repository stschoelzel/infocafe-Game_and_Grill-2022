import styled from "styled-components";
import { theme } from "../../theme";
import { borderColor } from "./H3";

export const H1 = styled.div`
  font-family: Oxanium;
  opacity: 0.9;
  white-space: nowrap;
  margin-bottom: 3rem;
  font-size: 3rem;
  color: ${theme.secondary};
  text-shadow: ${theme.textShadow};
  text-shadow: -1px -1px 0 ${borderColor}, 1px -1px 0 ${borderColor}, -1px 1px 0 ${borderColor}, 1px 1px 0 ${borderColor}, ${theme.textShadow};
`;
