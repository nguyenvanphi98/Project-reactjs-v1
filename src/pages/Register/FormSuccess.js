import React from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";
import Box from "../../components/common/Box";
import { BackgroundLogin } from "./../../assets/images";

const FormSuccess = () => {
  return (
    <BoxSuccess>
      <BoxHeading>
        <Heading1>Sign Up Success!</Heading1>
        <Heading3>
          Return to page? <LinkLogin href="/login">Login</LinkLogin>
        </Heading3>
      </BoxHeading>
      <BackgroundSVG>
        <SVG src={BackgroundLogin} />
      </BackgroundSVG>
    </BoxSuccess>
  );
};

export default FormSuccess;

const BoxSuccess = styled(Box)`
  display: flex;
  justify-content: center;
`;

const BoxHeading = styled(Box)`
  position: absolute;
  text-align: center;
`;

const Heading1 = styled.h1`
  color: #2563eb;
`;

const Heading3 = styled.h3``;

const LinkLogin = styled.a``;

const BackgroundSVG = styled(Box)`
  SVG {
    max-width: 650px;
    height: auto;
    padding: 110px 0 0;

    @media screen and (max-width: 425px) {
      max-width: 250px;
    }
  }
`;
