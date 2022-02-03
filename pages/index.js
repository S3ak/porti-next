import Head from "next/head";

import Header from "../components/header/Header";
import Body from "../components/body/Body";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body>
        <Header>Header section</Header>
        <Main>
          <section>
            <Carousel />
          </section>
        </Main>
        <Footer>Footer section</Footer>
      </Body>
    </>
  );
}
