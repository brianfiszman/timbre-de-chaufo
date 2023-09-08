import TitleWrapper from "../../Components/Title.js";
import Picture from "../../Components/Picture.js";
import LinkWrapper from "../../Components/Link.js";
import chaufoPic from "../../Resources/img/chaufo.png";
import "./Home.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Picture
          src={chaufoPic}
          alt="chaufo"
          size="small"
          borderRadius="4rem"
        />
        <TitleWrapper primary>Timbre de Chaufo</TitleWrapper>
        <LinkWrapper href="https://www.instagram.com/chaufoman/">
          Learn about Chaufo
        </LinkWrapper>
      </header>
    </div>
  );
}

export default App;
