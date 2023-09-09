import { Fragment } from "react";
import {
  RouterLink,
  Link,
  Picture,
  Title,
  MainBody,
  MainHeader,
} from "../../components";
import chaufoPic from "../../resources/img/chaufo.png";
import "./Home.css";

function Home() {
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
