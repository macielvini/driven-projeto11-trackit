import styled from "styled-components";
import HabitCard from "../../components/HabitCard";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { PageTitle, StyledPlusBtn } from "../../constants/styledComponents";

export default function Habits() {
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <PageTitle>Meus hábitos</PageTitle>
          <StyledPlusBtn>+</StyledPlusBtn>
        </div>
        <HabitCard />
        <NoHabitsText>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabitsText>
      </Wrapper>
      <Navbar />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 70px 12px 70px;

  background-color: #e5e5e5;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 22px 0 28px;
  }
`;

const NoHabitsText = styled.p`
  font-size: 18px;
  color: #666;
`;
