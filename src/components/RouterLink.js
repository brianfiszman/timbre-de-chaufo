import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RouterLink = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  text-shadow: 2px 2px 4px ${(props) => props.theme.colors.danger};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
const RouterLinkWrapper = ({ children, theme, to, ...props }) => (
  <RouterLink theme={theme}>
    <Link to={to} {...props}>
      {children}
    </Link>
  </RouterLink>
);

export { RouterLinkWrapper as RouterLink };
