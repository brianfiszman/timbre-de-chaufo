import { styled } from "styled-components";

const Picture = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  max-width: ${({ size }) =>
    size === "small"
      ? "25%"
      : size === "medium"
      ? "50%"
      : size === "large"
      ? "75%"
      : "100%"};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default Picture;
