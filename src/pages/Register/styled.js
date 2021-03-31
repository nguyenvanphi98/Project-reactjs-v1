import styled from "styled-components";
import Row from "../../components/common/Row";
import Box from "../../components/common/Box";

export const FormContentRight = styled(Row)`
  justify-content: center;
  padding: 40px;
  align-items: flex-start;
  background-color: #e5e7eb;
  height: 600px;
  opacity: 1;
`;

export const Form = styled.form`
  max-width: 385px;
  padding: 0 20px 10px;
  border-radius: 8px;
  background-color: #fff;

  @media screen and (max-width: 1024px) {
    max-width: 300px;
  }

  @media screen and (max-width: 768px) {
    max-width: 385px;
  }
`;

export const BoxForm = styled(Box)`
  margin-top: 16px;
`;

export const HeadingLogin = styled.h1``;

export const BoxLabel = styled(Box)``;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 16px;
  color: #101010;
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
`;

export const Input = styled.input`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.active};
  padding: 0 15px 0 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  width: 300px;
  height: 35px;
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

  @media screen and (max-width: 1024px) {
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 375px) {
    width: 200px;
  }
`;

export const ButtonForm = styled(Box)`
  text-align: center;
  padding-top: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  padding: 8px 16px;
  border-radius: 4px;
  width: 100%;
  height: 35px;
  background-color: #2563eb;
  cursor: pointer;
  font-weight: 750;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme.colors.focusInput};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const TextError = styled.p`
  color: red;
  margin: 0;
  padding-top: 5px;
`;

export const LinkLogin = styled.a``;

export const BackgroundSVG = styled(Box)`
  SVG {
    max-width: 512px;
    height: auto;
    padding: 60px 0 0 60px;

    @media screen and (max-width: 1024px) {
      max-width: 400px;
      padding: 75px 0 0 60px;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
