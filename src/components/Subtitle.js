import { styled } from "styled-components";

// Create a SubTitle component that'll render an <h1> tag with some styles
const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
`;

const SubtitleWrapper = ({ children, ...props }) => (
  <Subtitle {...props}>{children}</Subtitle>
);

export { SubtitleWrapper as Subtitle };
