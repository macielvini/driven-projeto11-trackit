import { useContext, useState } from "react";
import styled from "styled-components";
import check from "../assets/images/check.svg";
import { postCheckHabit, postUncheckHabit } from "../constants/api";
import { UserContext } from "../context/UserContext";

export default function TodayHabitCard({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  updateHabits,
}) {
  const [isDone, setIsDone] = useState(done);
  const { setUser, user } = useContext(UserContext);

  function checkHabit() {
    setIsDone(!isDone);
    let promise;
    if (isDone) {
      promise = postUncheckHabit(id);
    } else {
      promise = postCheckHabit(id);
    }
    promise
      .then(() => {
        updateHabits();
      })
      .catch((err) => {
        setIsDone(isDone);
        console.log(err.response.data);
      });
  }

  return (
    <>
      <Card done={isDone}>
        <div>
          <CardTitle>{name}</CardTitle>
          <div>
            <CurrentSequence done={isDone}>
              Sequencia atual:
              <span>{isDone ? currentSequence + 1 : currentSequence} dias</span>
            </CurrentSequence>

            <HighestSequence sequence={highestSequence === currentSequence}>
              Seu recorde:
              <span>{isDone ? highestSequence + 1 : highestSequence} dias</span>
            </HighestSequence>
          </div>
        </div>
        <Check done={isDone} onClick={checkHabit}>
          <img src={check} alt="check symbol" />
        </Check>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;

  display: flex;
  justify-content: space-between;

  color: #666666;

  & > div > div {
    margin-top: 7px;
  }
`;

const CurrentSequence = styled.span`
  font-size: 13px;

  span {
    color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  }
`;

const HighestSequence = styled.p`
  font-size: 13px;

  span {
    color: ${(props) => (props.sequence ? "#8FC549" : "#666666")};
  }
`;

const CardTitle = styled.p`
  font-size: 20px;

  color: #666666;
`;

const Check = styled.button`
  min-width: 69px;
  height: 69px;
  margin-left: 15px;

  background: ${(props) => (props.done ? "#8fc549" : "#EBEBEB")};
  border-radius: 5px;
  border: none;

  img {
    width: 70%;
  }
`;
