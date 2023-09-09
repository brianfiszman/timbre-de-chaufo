import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RouterLink = styled(Link)`
  color: ${(props) => props.theme.colors.accent};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;
const RouterLinkWrapper = ({ children, theme, to, ...props }) => (
  <RouterLink {...props} to={to} theme={theme}>
    {children}
  </RouterLink>
);

export { RouterLinkWrapper as RouterLink };
