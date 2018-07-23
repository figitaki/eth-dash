import styled from "styled-components";

import { color, fontSize } from "../styles/constants";

export const Text = styled.p`
  font-size: ${p => fontSize[p.size || "regular"]};
  line-height: 1.5;
  margin: ${p => p.margin || "0"};
  font-weight: ${p => p.weight || 400};
  color: ${p => color[p.color || "grey"]}
  font-family: "Fira Mono", monospace;
`;

export default Text;
