import Nav from 'react-bootstrap/Nav';
import { RouterLink } from './RouterLink';
import { theme } from '../style/theme.style';

function Navbar(){
    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
        <RouterLink to={"/"} theme={theme}>
            Home
        </RouterLink>
    </Nav.Item>

    <Nav.Item>
        <RouterLink to={"top10"} theme={theme}>
            Top 10
        </RouterLink>
    </Nav.Item>

    <Nav.Item>
        <RouterLink to={"chaufest"} theme={theme}>
            ¡Chaufest!
        </RouterLink>
    </Nav.Item>

    </Nav>
}

export default Navbar;
