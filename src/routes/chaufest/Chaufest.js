import { RouterLink, MainHeader, Picture, MainBody } from "../../components";
import { theme } from "../../style/theme.style";
import chaufest from "../../resources/img/chaufest.jpeg";
import "../../style/styles.css";
import Zoom from "react-medium-image-zoom";

function Chaufest() {
  return (
  <>
    <MainHeader theme={theme}>
      <div className="navbar">
          <RouterLink to={"/"} theme={theme} className="navbar__link">
            Home
          </RouterLink>
          <RouterLink to={"/top10"} theme={theme} className="navbar__link">
            Top 10
          </RouterLink>
          <RouterLink to={"/chaufest"} theme={theme} className="navbar__link">
            ¡Chaufest!
          </RouterLink>
	  </div>
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
