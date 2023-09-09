import { styled } from "styled-components";

// Create a SubTitle component that'll render an <h1> tag with some styles
const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(180deg, #330000 0%, #000000 100%);
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 10px ${(props) => props.theme.colors.danger},
    0 0 20px ${(props) => props.theme.colors.danger};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.gothicFont};
`;

const SubtitleWrapper = ({ children, ...props }) => (
  <Subtitle {...props}>{children}</Subtitle>
);

export { SubtitleWrapper as Subtitle };
