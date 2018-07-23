import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => (p.row ? "row" : "column")};
  align-items: ${p => p.align};
  justify-content: ${p => p.justify};
  height: ${p => p.height};
  width: ${p => p.width};
  margin: ${p => p.margin || "0"};
`;

export default Flex;
