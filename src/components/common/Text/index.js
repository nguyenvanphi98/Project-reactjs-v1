import React from "react";
import * as S from "./styled";

export const Text = ({ children, ...rest }) => (
  <S.Text {...rest}>{children}</S.Text>
);

export const TextSpan = ({ children, ...rest }) => (
  <S.TextSpan {...rest}>{children}</S.TextSpan>
);
