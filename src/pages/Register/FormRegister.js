import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import * as S from "./styled";
import { TextSpan } from "../../components/common/Text";

import SVG from "react-inlinesvg";

import { BackgroundLogin } from "../../assets/images";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <S.FormContentRight>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.HeadingLogin>Register</S.HeadingLogin>
        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>Username</S.Label>
          </S.BoxLabel>
          <S.Input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <S.TextError>{errors.username}</S.TextError>}
        </S.BoxForm>
        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>Email</S.Label>
          </S.BoxLabel>
          <S.Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <S.TextError>{errors.email}</S.TextError>}
        </S.BoxForm>
        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>Password</S.Label>
          </S.BoxLabel>
          <S.Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <S.TextError>{errors.password}</S.TextError>}
        </S.BoxForm>
        <S.BoxForm>
          <S.BoxLabel>
            <S.Label>Confirm Password</S.Label>
          </S.BoxLabel>
          <S.Input
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <S.TextError>{errors.password2}</S.TextError>}
        </S.BoxForm>
        <S.ButtonForm>
          <S.Button type="submit">Sign up</S.Button>
          <TextSpan padding="5px 0 0">
            Already have an account?
            <S.LinkLogin href="/login">Login</S.LinkLogin>
          </TextSpan>
        </S.ButtonForm>
      </S.Form>
      <S.BackgroundSVG>
        <SVG src={BackgroundLogin} />
      </S.BackgroundSVG>
    </S.FormContentRight>
  );
};

export default FormSignup;
