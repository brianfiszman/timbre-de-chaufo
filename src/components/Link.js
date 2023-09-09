import { styled } from "styled-components";
import { LINK_COLOR } from "../style/colors.style";

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  color: ${({ color }) => (color ? color : LINK_COLOR)};
`;

const LinkWrapper = ({ children, href, ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

export default LinkWrapper;
