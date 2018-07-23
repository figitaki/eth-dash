import styled from "styled-components";

export const Spacer = styled.div`
  width: ${p => p.size || "8px"};
  height: ${p => p.size || "8px"};
`;

export default Spacer;
