import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  color: ${(props) => (props.primary ? "lightblue" : "white")};
`;

const TitleWrapper = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

export default TitleWrapper;
