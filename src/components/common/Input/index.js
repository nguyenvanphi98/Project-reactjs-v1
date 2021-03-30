import styled from "styled-components";

export const InputMail = styled.input`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.active};
  padding: 0 15px 0 45px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 24px;
  width: 350px;
  height: 45px;
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 15px 13px;

  &.field-error {
    border-color: red;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme.colors.focusInput};
  }
`;
