import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { PageContainer, PageTitle } from "../../constants/styledComponents";
import TodayHabitCard from "../../components/TodayHabitCard";
import React from "react";
import DayJS from "react-dayjs";

export default function Today() {
  const newDate = new Date();
  const weekDay = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return (
    <>
      <Header />
      <PageContainer>
        <div>
          <PageTitle>
            <span>
              {weekDay[newDate.getDay()]}, {newDate.getDate()}/
              <DayJS date={newDate} format="MM" />
            </span>
          </PageTitle>
          <PageSubtitle>Nenhum hábito concluído ainda</PageSubtitle>
        </div>
        <div>
          <TodayHabitCard />
        </div>
      </PageContainer>
      <Navbar />
    </>
  );
}

const PageSubtitle = styled.p`
  width: 100%;
  font-size: 18px;
  color: #bababa;
`;
