import { styled } from "styled-components";
import { SUBTITLE_COLOR } from "../style/colors.style";

// Create a SubTitle component that'll render an <h1> tag with some styles
const Subtitle = styled.h3`
  color: ${({ color }) => (color ? color : SUBTITLE_COLOR)};
`;

const SubtitleWrapper = ({ children, ...props }) => (
  <Subtitle {...props}>{children}</Subtitle>
);

export { SubtitleWrapper as Subtitle };
