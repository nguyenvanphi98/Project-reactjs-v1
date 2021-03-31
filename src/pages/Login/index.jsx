import React from "react";
// import validate from "./validateInfo";
// import useForm from "./useForm";
import * as S from "./styled";
import { TextSpan } from "../../components/common/Text";
import Row from "../../components/common/Row";
import SVG from "react-inlinesvg";

import { BackgroundLogin, FacebookIcon, GoogleIcon } from "../../assets/images";

const FormSignup = ({ submitForm }) => {
  //   const { handleChange, handleSubmit, values, errors } = useForm(
  //     submitForm,
  //     validate
  //   );

  return (
    <S.FormContentRight>
      <S.Form
        // onSubmit={handleSubmit}
        noValidate
      >
        <S.HeadingLogin>Login</S.HeadingLogin>
        <TextSpan isGray>Doesn't have any account yet?</TextSpan>
        <S.LinkLogin href="/register"> Sign Up </S.LinkLogin>

        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>Email Address</S.Label>
          </S.BoxLabel>
          <S.Input
            type="text"
            name="username"
            placeholder="you@example.com"
            // value={values.username}
            // onChange={handleChange}
          />
          {/* {errors.username && <TextError>{errors.username}</TextError>} */}
        </S.BoxForm>
        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>
              Password <S.LinkLogin href="">Forgot Password?</S.LinkLogin>
            </S.Label>
          </S.BoxLabel>
          <S.Input
            type="email"
            name="email"
            placeholder="Enter 6 character or more"
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {errors.email && <TextError>{errors.email}</TextError>} */}
        </S.BoxForm>
        <S.BoxCheckBox>
          <S.InputCheckBox type="checkbox" />
          <S.LableCheckBox>Remember me</S.LableCheckBox>
        </S.BoxCheckBox>

        <S.ButtonForm>
          <S.Button type="submit">Login</S.Button>
        </S.ButtonForm>
        <S.BoxLogin padding="16px 0 16px">
          <TextSpan isGray>or login with</TextSpan>
        </S.BoxLogin>
        <Row justifyContent="space-between">
          <S.ButtonFBGG>
            <S.IconImg src={GoogleIcon} alt="google" />
            <TextSpan padding="0 0 0 5px">Google</TextSpan>
          </S.ButtonFBGG>
          <S.ButtonFBGG>
            <S.IconImg src={FacebookIcon} alt="facebook" />
            <TextSpan padding="0 0 0 5px">Facebook</TextSpan>
          </S.ButtonFBGG>
        </Row>
      </S.Form>
      <S.BackgroundSVG>
        <SVG src={BackgroundLogin} />
      </S.BackgroundSVG>
    </S.FormContentRight>
  );
};

export default FormSignup;
