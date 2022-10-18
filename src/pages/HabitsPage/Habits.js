import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { StyledPlusBtn } from "../../constants/styledComponents";
import { light } from "../../constants/theme";

export default function Habits() {
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <p>Meus hábitos</p>
          <StyledPlusBtn>+</StyledPlusBtn>
        </div>
      </Wrapper>
      <Navbar />
    </>
  );
}

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 70px 12px 70px;

  background-color: #e5e5e5;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 22px 0 28px;
  }

  p {
    color: ${light.text.mainHeading};
    font-size: 23px;
  }
`;
