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
import { useContext, useState } from "react";
import { loginUser } from "../../constants/api";
import { ThreeDots } from "react-loader-spinner";
import { Context } from "../../App";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const user = useContext(Context);

  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function login(e) {
    e.preventDefault();
    setIsLoading(true);

    loginUser({ ...form })
      .then((res) => {
        setUser({
          id: res.data.id,
          name: res.data.name,
          image: res.data.image,
          email: res.data.email,
          password: res.data.password,
          token: res.data.token,
        });

        navigate("/habits");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setIsLoading(false);
      });
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
            disabled={isLoading}
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => formHandler(e)}
            value={form.password}
            disabled={isLoading}
          />

          <StyledSignButton type="submit">
            {isLoading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Entrar"
            )}
          </StyledSignButton>
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
