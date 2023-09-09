import { Fragment } from "react";
import {
  MainBody,
  MainHeader,
  Picture,
  RouterLink,
  Subtitle,
  Title,
} from "../../components";

import chaufoPic from "../../resources/img/chaufo.png";
import hisKidsPic from "../../resources/img/kids.png";
import taxiCabPic from "../../resources/img/taxi-cab-special.png";

function TopTen() {
  return (
    <Fragment>
      <MainHeader secondary>
        <Picture
          src={chaufoPic}
          alt="chaufo"
          size="small"
          borderRadius="4rem"
        />
      </MainHeader>

      <MainBody primary>
        <Title>Top 10 de cosas con las que Chaufo nos ha divertido :-D</Title>

        <Subtitle>¿!Alguien quiere pensar en los niños!?</Subtitle>
        <Picture src={hisKidsPic} />

        <Subtitle>Lo mas Chaufo que Chaufo haya dicho: </Subtitle>
        <Picture src={taxiCabPic} />

        <RouterLink to={"/"}>Home</RouterLink>
      </MainBody>
    </Fragment>
  );
}

export default TopTen;
