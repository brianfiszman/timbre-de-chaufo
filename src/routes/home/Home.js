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
  Subtitle,
} from "../../components";
import chaufoPic from "../../resources/img/chaufo.png";
import "./Home.css";

function Home() {
  const timeForChaufo = new Date(2023, 8, 15);

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
        <Title primary>Timbre de Chaufo</Title>

        <Countdown
          date={timeForChaufo}
          renderer={({ hours, minutes, seconds, days }) => {
            return (
              <Subtitle>
                Faltan {zeroPad(days, 2)} días y {zeroPad(hours, 2)}:
                {zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
              </Subtitle>
            );
          }}
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
