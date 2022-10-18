import { Link } from "react-router-dom";
import styled from "styled-components";
import { light } from "../constants/theme";

export default function Header() {
  return (
    <>
      <Link to={"/habits"}>
        <StyledHeader>
          <h1>TrackIt</h1>
          <ImgContainer>
            <img src="" alt="" />
          </ImgContainer>
        </StyledHeader>
      </Link>
    </>
  );
}

const StyledHeader = styled.header`
  max-width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 18px;
  padding-right: 18px;

  background: ${light.header.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-weight: 400;
    font-size: 38px;

    color: ${light.header.text};
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ImgContainer = styled.div`
  width: 51px;
  height: 51px;

  background: white;
  border-radius: 50%;
`;
