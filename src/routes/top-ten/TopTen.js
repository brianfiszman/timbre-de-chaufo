import { Fragment } from "react";
import {
  LazyImageWithTitle,
  MainBody,
  MainHeader,
  Picture,
  RouterLink,
  Title,
} from "../../components";
import { theme } from "../../style/theme.style";
import "../../style/styles.css";

import chaufoPic from "../../resources/img/chaufo.webp";
import hisKidsPic from "../../resources/img/kids.webp";
import taxiCabPic from "../../resources/img/taxi-cab-special.webp";
import heilBrian from "../../resources/img/hitler-in-da-grup.webp";
import brianTheAntiChrist from "../../resources/img/brian-the-anti-christ.webp";
import chaufoTheCreepy from "../../resources/img/creepy-with-girls.webp";
import forgiveMeNati from "../../resources/img/forgive-me-nati.webp";
import heDoesntWantPussy from "../../resources/img/chaufo-does-not-want-pussy.webp";

function TopTen() {
  return (
    <Fragment>
      <MainHeader theme={theme}>
        <Picture
          src={chaufoPic}
          alt="chaufo"
          size="small"
          borderRadius="4rem"
        />
      </MainHeader>

      <MainBody theme={theme}>
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

        <Title theme={theme}>
          Top 7 de cosas con las que Chaufo nos ha divertido
        </Title>

        <LazyImageWithTitle
          src={forgiveMeNati}
          theme={theme}
          size="large"
          alt="apologizing-nati"
        >
          Perdoname Nati por todos mis errores 😭
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={brianTheAntiChrist}
          theme={theme}
          size="large"
          alt="brian-the-antichrist"
        >
          El anticristo está entre nosotros
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={heDoesntWantPussy}
          theme={theme}
          size="large"
          alt="no-hoes-just-lil-kid-games"
        >
          El solo quiere HDP, no quiere ponerla
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={chaufoTheCreepy}
          theme={theme}
          size="medium"
          alt="chaufo-is-no-creepy"
        >
          Ha demostrado ser un experto para hablar con una mujer
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={hisKidsPic}
          theme={theme}
          alt="chaufo-and-his-kids"
        >
          ¿!Alguien quiere pensar en sus niños!?
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={taxiCabPic}
          theme={theme}
          alt="chaufo-never-pays"
        >
          Lo mas Chaufo que Chaufo haya dicho:
        </LazyImageWithTitle>

        <LazyImageWithTitle
          src={heilBrian}
          theme={theme}
          size="medium"
          alt="heil-brian"
        >
          ¿Y como olvidarme del niño Hitler?
        </LazyImageWithTitle>

        <RouterLink to={"/"} theme={theme}>
          Home
        </RouterLink>
      </MainBody>
    </Fragment>
  );
}

export default TopTen;
