import { RouterLink, MainHeader, Picture, MainBody } from "../../components";
import { theme } from "../../style/theme.style";
import chaufest from "../../resources/img/chaufest.webp";
import { styled } from "styled-components";
import "../../style/styles.css";
import Zoom from "react-medium-image-zoom";

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

function Chaufest() {
  return (
  <>
    <MainHeader theme={theme}>
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
    </MainHeader>
	
	<MainBody theme={theme}>
		<Zoom>
			<Picture src={chaufest} alt="chaufest" size="medium" className="chaufest" />
		</Zoom>
	</MainBody>
	</>
  );
}

export default Chaufest;
