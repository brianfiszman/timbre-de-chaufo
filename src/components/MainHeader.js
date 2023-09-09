import { styled } from "styled-components";

export const MainHeader = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
