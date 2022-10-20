import styled from "styled-components";
import { StyledInput, StyledSignButton } from "../constants/styledComponents";

export default function HabitCard() {
  return (
    <>
      <CardContainer>
        <CardInput type="text" placeholder="nome do hábito" />
        <DayList>
          <Day>D</Day>
          <Day>S</Day>
          <Day>T</Day>
          <Day>Q</Day>
          <Day>Q</Day>
          <Day>S</Day>
          <Day>S</Day>
        </DayList>
        <div>
          <CancelBtn>Cancelar</CancelBtn>
          <SaveBtn>Salvar</SaveBtn>
        </div>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  padding: 18px;

  & > div {
    align-self: flex-end;
    gap: 23px;
    margin: 0;
  }
`;

const CardInput = styled(StyledInput)`
  width: 100%;
`;

const DayList = styled.ul`
  display: flex;
  width: 100%;
  gap: 4px;
`;

const Day = styled.li`
  width: 30px;
  height: 30px;

  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  color: #dbdbdb;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 8px 0 30px;

  cursor: pointer;
`;

const CancelBtn = styled.button`
  font-size: 16px;
  color: #52b6ff;

  background: none;
  border: none;
`;
const SaveBtn = styled(StyledSignButton)`
  width: 84px;
`;
