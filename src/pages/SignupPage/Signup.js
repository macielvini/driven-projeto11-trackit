import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { light } from "../../constants/colors";
import {
  LogoWrapper,
  MainHeading,
  StyledInput,
  StyledLink,
  StyledSignButton,
} from "../../constants/styledComponents";

export default function Signup() {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
          <MainHeading>TrackIt</MainHeading>
        </LogoWrapper>

        <Form>
          <StyledInput type="text" placeholder="email" />
          <StyledInput type="text" placeholder="senha" />
          <StyledInput type="text" placeholder="nome" />
          <StyledInput type="text" placeholder="url da foto" />

          <StyledSignButton>Cadastrar</StyledSignButton>
        </Form>
        <StyledLink to={"/"}>Já tem uma conta? Faça login!</StyledLink>
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
