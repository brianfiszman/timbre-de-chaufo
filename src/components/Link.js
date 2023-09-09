import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  color: ${(props) => props.theme.colors.accent};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;

const LinkWrapper = ({ children, href, ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

export { LinkWrapper as Link };
