import styled from "styled-components";
import { deleteHabit } from "../constants/api";

export default function HabitCard({
  name,
  days,
  habitId,
  myHabits,
  setMyHabits,
}) {
  function delHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    deleteHabit(habitId, config)
      .then(setMyHabits([...myHabits]))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <Card>
        <ion-icon name="trash-outline" onClick={delHabit}></ion-icon>
        <p>{name}</p>
        <DayList>
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
            <Day key={i} isSelected={days.includes(i)}>
              {d}
            </Day>
          ))}
        </DayList>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ion-icon {
    font-size: 20px;
    position: absolute;
    top: 11px;
    right: 11px;
    z-index: 1;
  }

  & > p {
    font-size: 20px;
    color: #666666;
  }
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

  cursor: pointer;
`;
