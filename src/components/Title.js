import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${({color}) => color};
`

export function Title (props) {
    return <StyledTitle {...props} />;
}