import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { light } from "../../constants/colors";
import {
  StyledInput,
  StyledSignButton,
  MainHeading,
  LogoWrapper,
  StyledLink,
} from "../../constants/styledComponents";

export default function Login() {
  const navigate = useNavigate();

  function login() {
    navigate("/habits");
  }

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
          <MainHeading>TrackIt</MainHeading>
        </LogoWrapper>
        <Form onSubmit={login}>
          <StyledInput type="text" placeholder="email" />
          <StyledInput type="password" placeholder="password" />
          <StyledSignButton type="submit">Entrar</StyledSignButton>
        </Form>
        <StyledLink to={"/signup"}>Não tem uma conta? Cadastre-se!</StyledLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${light.background};

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

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;
