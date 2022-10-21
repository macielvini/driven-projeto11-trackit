import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { postHabit } from "../constants/api";
import { StyledInput, StyledSignButton } from "../constants/styledComponents";

export default function AddHabit({ setShowAddHabit, updateHabits }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function addDay(day) {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      return;
    }

    setSelectedDays([...selectedDays, day]);
  }

  function cancelHabit() {
    setShowAddHabit(false);
    updateHabits();
  }

  function saveHabit() {
    setIsLoading(true);

    const body = { name: habitName, days: selectedDays };

    postHabit(body)
      .then(() => {
        setShowAddHabit(false);
        updateHabits();
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });

    setSelectedDays([]);
    setHabitName("");
  }

  return (
    <>
      <CardContainer>
        <CardInput
          type="text"
          placeholder="nome do hábito"
          name="habit"
          onChange={(e) => setHabitName(e.target.value)}
          disabled={isLoading}
        />
        <DayList>
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
            <Day
              isSelected={selectedDays.includes(i)}
              key={i}
              onClick={() => addDay(i)}
            >
              {d}
            </Day>
          ))}
        </DayList>
        <div>
          <CancelBtn onClick={cancelHabit}>Cancelar</CancelBtn>
          <SaveBtn onClick={saveHabit} disabled={isLoading}>
            {" "}
            {isLoading ? (
              <ThreeDots
                height="50"
                width="50"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Salvar"
            )}
          </SaveBtn>
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
    display: flex;
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

  background: ${(props) => (props.isSelected ? "#cfcfcf" : "none")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  color: ${(props) => (props.isSelected ? "#fff" : "#dbdbdb")};

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
