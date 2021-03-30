import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

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

export default Row;
