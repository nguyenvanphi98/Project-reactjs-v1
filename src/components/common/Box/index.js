import styled, { css } from "styled-components";

const Box = styled.div`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export default Box;
