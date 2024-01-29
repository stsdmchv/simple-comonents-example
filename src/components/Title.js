import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${({color}) => color};
`

const Title = (props) => {
    return <StyledTitle {...props} />;
};

export default Title;
