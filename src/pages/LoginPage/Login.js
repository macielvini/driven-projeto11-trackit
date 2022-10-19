import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { light } from "../../constants/theme";
import {
  StyledInput,
  StyledSignButton,
  MainHeading,
  LogoWrapper,
  StyledLink,
} from "../../constants/styledComponents";
import { useState } from "react";
import { loginUser } from "../../constants/api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  function login(e) {
    e.preventDefault();

    const body = { ...form };

    loginUser(body)
      .then((res) => {
        console.log(res.data);
        navigate("/habits");
      })
      .catch((err) => console.log(err.response.data.message));
  }

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
          <MainHeading>TrackIt</MainHeading>
        </LogoWrapper>
        <Form onSubmit={login}>
          <StyledInput
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => formHandler(e)}
            value={form.email}
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => formHandler(e)}
            value={form.password}
          />
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
