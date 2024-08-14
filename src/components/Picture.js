import { styled } from "styled-components";

export const Picture = styled.img`
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
  display: flex;
  margin: 0 auto;
  border-radius: ${({ borderRadius }) => borderRadius};
`;
