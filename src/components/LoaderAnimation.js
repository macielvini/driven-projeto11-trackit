import styled from "styled-components";

export default function LoaderAnimation() {
  return (
    <>
      <StyledLoader />
    </>
  );
}

const StyledLoader = styled.span`
  & {
    width: 28px;
    height: 28px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
