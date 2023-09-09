import { startOfDay } from "date-fns";
import { Fragment } from "react";
import Countdown, { zeroPad } from "react-countdown";
import {
  RouterLink,
  Link,
  Picture,
  Title,
  MainBody,
  MainHeader,
  DangerHeader,
} from "../../components";
import { theme } from "../../style/theme.style";
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

        <Countdown
          date={timeForChaufo}
          renderer={({ hours, minutes, seconds, days }) => (
            <DangerHeader theme={theme}>
              Faltan {zeroPad(days, 2)} días y {zeroPad(hours, 2)}:
              {zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
            </DangerHeader>
          )}
        />

        <Link href="https://www.instagram.com/chaufoman/">
          Learn about Chaufo
        </Link>

        <RouterLink to={"top10"}>
          Top 10 de cosas con las que Chaufo nos ha divertido :-D
        </RouterLink>
      </MainBody>
    </Fragment>
  );
}

export default Home;
