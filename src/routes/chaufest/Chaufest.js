import { MainHeader, Picture } from "../../components";
import { theme } from "../../style/theme.style";
import chaufest from "../../resources/img/chaufest.jpeg";

function Chaufest() {
  return (
    <MainHeader theme={theme}>
      <Picture src={chaufest} alt="chaufest" size="small"/>
    </MainHeader>
  );
}

export default Chaufest;
