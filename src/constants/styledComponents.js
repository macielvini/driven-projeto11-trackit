import { Link } from "react-router-dom";
import styled from "styled-components";
import { light } from "./theme";

export const MainHeading = styled.h1`
  font-size: 70px;
  font-weight: 400;
  color: ${light.text.mainHeading};

  margin: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;

  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  padding-left: 11px;

  &::placeholder {
    color: #dbdbdb;
  }

  &:disabled {
    background: #f2f2f2;
    color: #afafaf;
  }
`;

export const StyledSignButton = styled.button`
  width: 100%;
  height: 45px;

  background: #52b6ff;
  border-radius: 5px;

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  &:disabled {
    opacity: 0.7;
  }
`;

export const StyledLink = styled(Link)`
  color: ${light.link};
  text-decoration: underline;
  font-size: 14px;
`;

export const StyledPlusBtn = styled.button`
  width: 40px;
  height: 35px;

  background: #52b6ff;
  border-radius: 5px;

  border: none;

  font-size: 27px;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.p`
  color: ${light.text.mainHeading};
  font-size: 23px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & span::first-letter {
    text-transform: capitalize;
  }
`;

export const PageContainer = styled.div`
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
