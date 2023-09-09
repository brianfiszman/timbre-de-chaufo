import { styled } from "styled-components";

// Styled text with intense styles
const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.gothicFont};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.danger},
    0 0 20px ${(props) => props.theme.colors.danger};
  text-align: center;
`;

const TextWrapper = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export { TextWrapper as Text };
