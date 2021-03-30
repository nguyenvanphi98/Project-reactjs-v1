import React from "react";
import * as S from "./styled";
import SVG from "react-inlinesvg";
import { LogoIcon } from "../../assets/images";

const index = () => {
  return (
    <S.Nav>
      <S.NavLink to="/">
        <SVG src={LogoIcon} />
      </S.NavLink>
      <S.Bars />
      <S.NavMenu>
        <S.NavLink to="/home" activeStyle>
          Home
        </S.NavLink>
        <S.NavLink to="/about" activeStyle>
          About
        </S.NavLink>
        <S.NavLink to="/services" activeStyle>
          Services
        </S.NavLink>
        <S.NavLink to="/contact-us" activeStyle>
          Contact Us
        </S.NavLink>
        <S.NavLink to="/register" activeStyle>
          Sign Up
        </S.NavLink>
        <S.NavBtn>
          <S.NavBtnLink to="login">Login</S.NavBtnLink>
        </S.NavBtn>
      </S.NavMenu>
    </S.Nav>
  );
};

export default index;
