import { RouterLink } from './RouterLink';
import { theme } from '../style/theme.style';
import "../style/styles.css";

function Navbar(){
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
}

export default Navbar;
