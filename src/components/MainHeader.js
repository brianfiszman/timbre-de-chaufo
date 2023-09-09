import { styled } from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../style/colors.style";

export const MainHeader = styled.div`
  background-color: ${({ primary, secondary }) => {
    if (primary) return PRIMARY_COLOR;
    if (secondary) return SECONDARY_COLOR;
  }};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
