import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputEl = styled.input`
  border: none;
  background: none;
  border-bottom: 2px dotted ${theme.secondary};
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.1rem;
`;
export const TextField = (props) => {
  return <InputEl type="text" {...props} />;
};
