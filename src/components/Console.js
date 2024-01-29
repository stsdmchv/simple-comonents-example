import styled from "styled-components";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({color}) => color || "white"};
  &:focus {
    outline: none;
  }
`;

export function Console (props) {
    return <StyledConsole {...props} />;
}