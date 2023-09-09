import { styled } from "styled-components";

export const MainBody = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow};
  font-family: ${(props) => props.theme.gothicFont};

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${({ minHeight }) => minHeight || "63.6vh"};
`;
