import styled from "styled-components";
import { text } from "./colors";

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

export const StyledLoginButton = styled.button`
  width: 303px;
  height: 45px;

  background: #52b6ff;
  border-radius: 5px;

  color: #fff;

  border: none;
`;
