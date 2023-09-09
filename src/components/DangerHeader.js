import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const DangerHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colors.danger};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const DangerHeaderWrapper = ({ children, ...props }) => (
  <DangerHeader {...props}>{children}</DangerHeader>
);

export { DangerHeaderWrapper as DangerHeader };
