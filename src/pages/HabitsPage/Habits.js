import { useEffect, useState } from "react";
import styled from "styled-components";
import AddHabit from "../../components/AddHabit";
import HabitCard from "../../components/HabitCard";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { getHabits } from "../../constants/api";
import { PageTitle, StyledPlusBtn } from "../../constants/styledComponents";

export default function Habits() {
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [myHabits, setMyHabits] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    getHabits(config)
      .then((res) => setMyHabits(res.data))
      .catch((err) => console.log(err.response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAddHabit]);

  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <PageTitle>
            Meus hábitos
            <StyledPlusBtn onClick={() => setShowAddHabit(true)}>
              +
            </StyledPlusBtn>
          </PageTitle>
        </div>

        {showAddHabit ? <AddHabit setShowAddHabit={setShowAddHabit} /> : ""}

        <div>
          {myHabits.length > 0 ? (
            myHabits.map((habit) => (
              <HabitCard key={habit.id} name={habit.name} days={habit.days} />
            ))
          ) : (
            <NoHabitsText>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </NoHabitsText>
          )}
        </div>
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

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    margin: 22px 0 28px;
  }
`;

const NoHabitsText = styled.p`
  font-size: 18px;
  color: #666;
`;
