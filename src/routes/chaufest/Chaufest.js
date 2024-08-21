import { RouterLink, MainHeader, Picture } from "../../components";
import { theme } from "../../style/theme.style";
import chaufest from "../../resources/img/chaufest.jpeg";
import "../../style/styles.css";

function Chaufest() {
  return (
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

      <Picture src={chaufest} alt="chaufest" size="small"/>
    </MainHeader>
  );
}

export default Chaufest;
