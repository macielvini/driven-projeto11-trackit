import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { link, text } from "../../constants/colors";
import {
  StyledInput,
  StyledLoginButton,
} from "../../constants/styledComponents";

export default function Login() {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
          <MainHeading>TrackIt</MainHeading>
        </LogoWrapper>
        <Form>
          <StyledInput type="text" placeholder="email" />
          <StyledInput type="password" placeholder="password" />
          <StyledLoginButton type="submit">Entrar</StyledLoginButton>
        </Form>
        <StyledLink to={"/"}>Não tem uma conta? Cadastre-se!</StyledLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 32px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeading = styled.h1`
  font-size: 70px;
  font-weight: 400;
  color: ${text.mainHeading};

  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;

const StyledLink = styled(Link)`
  color: ${link};
  text-decoration: underline;
  font-size: 14px;
`;
