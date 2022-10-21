import { Link } from "react-router-dom";
import styled from "styled-components";
import { light } from "../constants/theme";

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <ul>
          <Link to="/habits">
            <li>Hábitos</li>
          </Link>
          <TodayLi>
            <Link to="/today">
              <span>Hoje</span>
            </Link>
          </TodayLi>
          <Link to="/habits">
            <li>Histórico</li>
          </Link>
        </ul>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;

  background: #ffffff;

  ul {
    width: 100%;
    padding: 31px;

    position: relative;

    display: flex;
    justify-content: space-between;
  }

  li {
    font-size: 18px;
    color: #52b6ff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const TodayLi = styled.li`
  position: absolute;
  left: 50%;
  /* top: -30px; */
  transform: translate(-50%, -65px);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 91px;
  height: 91px;
  border-radius: 50%;

  background-color: ${light.text.accent};

  span {
    color: ${light.background};
  }
`;
