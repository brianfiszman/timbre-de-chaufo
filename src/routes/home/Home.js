import { Fragment } from "react";
import {
  RouterLink,
  Link,
  Countdown,
  Picture,
  Title,
  MainBody,
  MainHeader,
} from "../../components";
import { theme } from "../../style/theme.style";
import { startOfDay } from "date-fns";
import chaufoPic from "../../resources/img/chaufo.png";
import "./Home.css";

function Home() {
  const timeForChaufo = startOfDay(new Date(2023, 8, 15));

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
        <Title theme={theme}>Timbre de Chaufo</Title>

        <Countdown countdownTo={timeForChaufo} theme={theme} />

        <Link theme={theme} href="https://www.instagram.com/chaufoman/">
          Learn about Chaufo
        </Link>

        <RouterLink to={"top10"} theme={theme}>
          Top 7 de cosas con las que Chaufo nos ha divertido :-D
        </RouterLink>
      </MainBody>
    </Fragment>
  );
}

export default Home;
