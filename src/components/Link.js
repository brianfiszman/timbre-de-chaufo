import { styled } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  text-shadow: 2px 2px 4px ${(props) => props.theme.colors.danger};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const LinkWrapper = ({ children, href, ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

export { LinkWrapper as Link };
