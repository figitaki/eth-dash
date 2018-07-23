import styled from "styled-components";

import { color } from "../styles/constants";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${p => (p.primary ? color.green : "white")};
  color: ${p => (p.primary ? "white" : color.green)};
  border: ${p => (p.primary ? "none" : `1px solid ${color.green}`)};
  font-weight: bold;
  font-family: "Fira Mono", monospace;
  font-size: 16px;
`;

export default Button;
