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
  width: 303px;
  height: 45px;

  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  padding-left: 11px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const StyledSignButton = styled.button`
  width: 303px;
  height: 45px;

  background: #52b6ff;
  border-radius: 5px;

  color: #fff;

  border: none;
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