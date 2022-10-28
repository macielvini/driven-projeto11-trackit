import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { light } from "../constants/theme";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { userInfo } = useContext(UserContext);

  return (
    <>
      <Link to={"/habits"}>
        <StyledHeader>
          <h1>TrackIt</h1>
          <ImgContainer>
            <img src={userInfo.image} alt="" />
          </ImgContainer>
        </StyledHeader>
      </Link>
    </>
  );
}

const StyledHeader = styled.header`
  min-width: 100vw;
  max-width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;

  padding: 0 18px;

  background: ${light.header.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-weight: 400;
    font-size: 38px;

    color: ${light.header.text};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    clip-path: circle(50%);
  }
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;

  background: white;
  border-radius: 50%;
`;
