import React from "react";
import styled from "styled-components";

import { color } from "../styles/constants";

const Input = styled.input`
  height: 48px;
  border: 1px solid ${color.lightGrey};
  width: 100%;
  font-size: 16px;
  padding: 0.5rem 1rem;
  color: ${p => color[p.color || "grey"]}
  font-family: "Fira Mono", monospace;
`;

export const TextField = ({ value, onChange, placeholder }) => (
  <Input
    value={value}
    onChange={evt => onChange(evt.target.value)}
    placeholder={placeholder}
  />
);

export default TextField;
