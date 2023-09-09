import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RouterLink = styled.span``;
const RouterLinkWrapper = ({ children, to, ...props }) => (
  <RouterLink>
    <Link to={to} {...props}>
      {children}
    </Link>
  </RouterLink>
);

export { RouterLinkWrapper as RouterLink };
