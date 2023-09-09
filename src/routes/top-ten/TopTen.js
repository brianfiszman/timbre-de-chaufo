import { Fragment } from "react";
import {
  MainBody,
  MainHeader,
  Picture,
  RouterLink,
  Subtitle,
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
        <Title theme={theme}>
          Top 7 de cosas con las que Chaufo nos ha divertido
        </Title>

        <Subtitle theme={theme}>
          Perdoname Nati por todos mis errores 😭
        </Subtitle>
        <Picture src={forgiveMeNati} size="small" />

        <Subtitle theme={theme}>El anticristo está entre nosotros</Subtitle>
        <Picture src={brianTheAntiChrist} size="small" />

        <Subtitle theme={theme}>El solo quiere HDP, no quiere ponerla</Subtitle>
        <Picture src={heDoesntWantPussy} size="small" />

        <Subtitle theme={theme}>
          Ha demostrado ser un experto para hablar con una mujer
        </Subtitle>
        <Picture src={chaufoTheCreepy} size="small" />

        <Subtitle theme={theme}>
          ¿!Alguien quiere pensar en sus niños!?
        </Subtitle>
        <Picture src={hisKidsPic} size="large" />

        <Subtitle theme={theme}>Lo mas Chaufo que Chaufo haya dicho:</Subtitle>
        <Picture src={taxiCabPic} size="large" />

        <Subtitle theme={theme}>¿Y como olvidarme del niño Hitler?</Subtitle>
        <Picture src={heilBrian} size="small" />

        <RouterLink to={"/"} theme={theme}>
          Home
        </RouterLink>
      </MainBody>
    </Fragment>
  );
}

export default TopTen;
