import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { PageContainer, PageTitle } from "../../constants/styledComponents";
import TodayHabitCard from "../../components/TodayHabitCard";
import React, { useContext, useEffect, useState } from "react";
import { getTodayHabits } from "../../constants/api";
import { Context } from "../../App";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { TailSpin } from "react-loader-spinner";
import { light } from "../../constants/theme";

export default function Today({ setUser }) {
  const user = useContext(Context);

  const [todayHabits, setTodayHabits] = useState([]);
  const doneList = todayHabits.filter((h) => h.done).length;

  function updateHabits() {
    getTodayHabits()
      .then((res) => {
        setTodayHabits(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  useEffect(() => {
    updateHabits();
    setUser({ ...user, doneToday: doneList / todayHabits.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneList]);

  return (
    <>
      <Header />
      <PageContainer>
        <div>
          <PageTitle>
            <span>{dayjs().locale("pt-br").format("dddd, DD/MM")}</span>
          </PageTitle>
          <PageSubtitle done={doneList > 0}>
            {doneList > 0
              ? `${Math.ceil(
                  (doneList * 100) / todayHabits.length
                )}% dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </PageSubtitle>
        </div>
        <div>
          {todayHabits.length > 0 ? (
            todayHabits.map((h) => (
              <TodayHabitCard
                key={h.id}
                id={h.id}
                name={h.name}
                done={h.done}
                currentSequence={h.currentSequence}
                highestSequence={h.highestSequence}
                updateHabits={updateHabits}
              />
            ))
          ) : (
            <TailSpin color={light.spinner} />
          )}
        </div>
      </PageContainer>
      <Navbar />
    </>
  );
}

const PageSubtitle = styled.p`
  width: 100%;
  font-size: 18px;
  color: ${(props) => (props.done ? " #8FC549" : "#bababa")};
`;
