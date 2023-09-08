import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  color: ${(props) => (props.primary ? "lightblue" : "white")};
`;

const LinkWrapper = ({ children, href, ...props }) => (
  <Link href={href} {...props}>{children}</Link>
);

export default LinkWrapper;
