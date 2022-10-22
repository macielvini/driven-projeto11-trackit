import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { PageContainer, PageTitle } from "../../constants/styledComponents";

export default function History() {
  return (
    <>
      <Header />
      <PageContainer>
        <div>
          <PageTitle>Histórico</PageTitle>
        </div>
        <Warning>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Warning>
      </PageContainer>
      <Navbar />
    </>
  );
}

const Warning = styled.p`
  font-size: 18px;
  color: #666;
`;
