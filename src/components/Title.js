import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const TitleWrapper = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

export { TitleWrapper as Title };
