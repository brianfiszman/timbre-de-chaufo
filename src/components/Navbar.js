import { RouterLink } from './RouterLink';
import { theme } from '../style/theme.style';
import { styled } from "styled-components";

const Navbar = styled.div`
  margin: 0 auto;
  display: flex;
  @media (max-width: 480px){
      display: grid;
      text-align: center;
    }
`;

const NavbarLink = styled.div`
  margin: 0 30px;
`;

function Nav(){
    <Navbar>
        <NavbarLink>
          <RouterLink to={"/"} theme={theme} className="navbar__link">
            Home
          </RouterLink>
        </NavbarLink>

        <NavbarLink>
          <RouterLink to={"/top10"} theme={theme} className="navbar__link">
            Top 10
          </RouterLink>
        </NavbarLink>

        <NavbarLink>
          <RouterLink to={"/chaufest"} theme={theme} className="navbar__link">
            ¡Chaufest!
          </RouterLink>
        </NavbarLink>
	</Navbar>
}

export default Nav;
