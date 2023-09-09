import { styled } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../style/colors.style";

export const MainBody = styled.div`
  background-color: ${({ primary, secondary }) => {
    if (primary) return PRIMARY_COLOR;
    if (secondary) return SECONDARY_COLOR;
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  min-height: ${({ minHeight }) => minHeight || "63.6vh"};
`;
