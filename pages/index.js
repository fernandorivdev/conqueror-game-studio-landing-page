import About from "../components/About";
import LatestGames from "../components/LatestGames";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Conqueror Game Studio Landing Page' />
      <Layout>
        <Hero />
        <About />
        <LatestGames />
      </Layout>
    </>
  );
}
