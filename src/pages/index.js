import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import {Head,Description,Keywords} from 'next/head'

const Home = () => {
  return (
    <>
    {/* <Head>
      <Title>Ved's Portfolio</Title>
      <Description>This is Ved Recharla's personal website where he posts regular updates about his skills and personal life .</Description>
      
    </Head> */}
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout></>
  );
};

export default Home;
