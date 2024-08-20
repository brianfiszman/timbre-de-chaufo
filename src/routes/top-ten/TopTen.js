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

import chaufoPic from "../../resources/img/chaufo.png";
import hisKidsPic from "../../resources/img/kids.png";
import taxiCabPic from "../../resources/img/taxi-cab-special.png";
import heilBrian from "../../resources/img/hitler-in-da-grup.jpeg";
import brianTheAntiChrist from "../../resources/img/brian-the-anti-christ.jpeg";
import chaufoTheCreepy from "../../resources/img/creepy-with-girls.jpeg";
import forgiveMeNati from "../../resources/img/forgive-me-nati.jpeg";
import heDoesntWantPussy from "../../resources/img/chaufo-does-not-want-pussy.jpeg";

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
        <RouterLink to={"/"} theme={theme}>
          Home
        </RouterLink>

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
