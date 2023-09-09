import { styled } from "styled-components";
import { TITLE_COLOR } from "../style/colors.style";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  color: ${({ color }) => (color ? color : TITLE_COLOR)};
`;

const TitleWrapper = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

export { TitleWrapper as Title };
