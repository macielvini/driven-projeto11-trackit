import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { light } from "../../constants/theme";
import {
  LogoWrapper,
  MainHeading,
  StyledInput,
  StyledLink,
  StyledSignButton,
} from "../../constants/styledComponents";
import { useState } from "react";
import LoaderAnimation from "../../components/LoaderAnimation";
import { registerUser } from "../../constants/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function signup(e) {
    e.preventDefault();

    setIsLoading(true);

    const body = { ...form };

    registerUser(body)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.details[0]);
      });
  }

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
          <MainHeading>TrackIt</MainHeading>
        </LogoWrapper>

        <Form onSubmit={signup}>
          <StyledInput
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => formHandler(e)}
            value={form.email}
            disabled={isLoading}
          />
          <StyledInput
            type="password"
            placeholder="senha"
            name="password"
            onChange={(e) => formHandler(e)}
            value={form.password}
            disabled={isLoading}
          />
          <StyledInput
            type="text"
            placeholder="nome"
            name="name"
            onChange={(e) => formHandler(e)}
            value={form.name}
            disabled={isLoading}
          />
          <StyledInput
            type="text"
            placeholder="url da foto"
            name="image"
            onChange={(e) => formHandler(e)}
            value={form.image}
            disabled={isLoading}
          />
          <StyledSignButton type="submit">
            {isLoading ? <LoaderAnimation /> : "Cadastrar"}
          </StyledSignButton>
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
