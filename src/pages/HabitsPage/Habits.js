import { useEffect, useState } from "react";
import styled from "styled-components";
import AddHabit from "../../components/AddHabit";
import HabitCard from "../../components/HabitCard";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { getHabits } from "../../constants/api";
import {
  PageTitle,
  StyledPlusBtn,
  PageContainer,
} from "../../constants/styledComponents";

export default function Habits() {
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [myHabits, setMyHabits] = useState([]);

  function updateHabits() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    getHabits(config)
      .then((res) => {
        setMyHabits(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  useEffect(() => {
    updateHabits();
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <div>
          <PageTitle>
            Meus hábitos
            <StyledPlusBtn onClick={() => setShowAddHabit(true)}>
              +
            </StyledPlusBtn>
          </PageTitle>
        </div>

        {showAddHabit ? (
          <AddHabit
            setShowAddHabit={setShowAddHabit}
            updateHabits={updateHabits}
          />
        ) : (
          ""
        )}

        <div>
          {myHabits.length > 0 ? (
            myHabits.map((habit) => (
              <HabitCard
                updateHabits={updateHabits}
                key={habit.id}
                habitId={habit.id}
                name={habit.name}
                days={habit.days}
              />
            ))
          ) : (
            <NoHabitsText>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </NoHabitsText>
          )}
        </div>
      </PageContainer>
      <Navbar />
    </>
  );
}

const NoHabitsText = styled.p`
  font-size: 18px;
  color: #666;
`;
