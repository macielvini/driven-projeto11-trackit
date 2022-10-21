import styled from "styled-components";
import check from "../assets/images/check.svg";

export default function TodayHabitCard() {
  return (
    <>
      <Card>
        <div>
          <CardTitle>Ler 1 capítulo de livro</CardTitle>
          <div>
            <p>Sequencia atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </div>
        </div>
        <Check>
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

  & > div > div {
    margin-top: 7px;
  }

  & > div > div > p {
    font-size: 13px;

    color: #666666;
  }
`;

const CardTitle = styled.p`
  font-size: 20px;

  color: #666666;
`;

const Check = styled.button`
  width: 69px;
  height: 69px;

  background: #8fc549;
  border-radius: 5px;
  border: none;

  img {
    width: 70%;
  }
`;
