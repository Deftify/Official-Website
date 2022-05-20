//import {PhotoSlider, Slide} from '../../components/PhotoSlider'; edited part
import {Accessibility} from './components/Accessibility';
import {Aggregator} from './components/Aggregator';
import {ContactForm} from '../../components/ContactForm';
import {Introduction} from './components/Introduction';
import {Partners} from './components/Partners';
import {PlayToEarn} from './components/PlayToEarn';
import {PrivateAccessPad} from './components/PrivateAccessPad';
import './index.scss';
import {useEffect, useState} from 'react';
//import Typewriter from 'typewriter-effect'; edited part

/* export const slides: Slide[] = [
  {
    caption: 'Our launchpad and incubator is called Private Access Pad, with access to untapped markets',
    image:   './images/slide-one.svg'
  }, {
    caption: 'Our market data aggregator is like DexTools + DefiLlama + OpenSea data aggregator all at once',
    image:   './images/slider-02.svg'
  },
  {
    caption: 'Deftify Indexes present opportunities on many alternative chains, like Cardano and Polygon',
    image:   './images/slider-04.svg'
  }, {
    caption: 'Introducing Metacurse, Deftify’s own metaverse P2E game that will utilize Deftify token (DFTY)',
    image:   './images/slider-03.svg'
  }
]; 

const SECTION_TITLES = [
  'an Africa-focused crypto launchpad and incubator, connecting African innovations to the world.',
  'a market data aggregator service [imagine DexTools + DefiLlama + OpenSea data aggregator all in one space].',
  'is an index funds with exposure on multiple chains unlike DeFi Pulse Index funds that is limited on Ethereum',
  'incubating a P2E game (Metacurse) that is fully powered by Deftify token (DFTY).',
]; edited part */

export const Home = () => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

const topNotification = () => {
  return (
  <div className="cookie-banner">
    <span>
        <a href="https://www.producthunt.com/posts/deftify" target="_blank" rel="noreferrer">Please vote for Deftify at ProductHunt ❤️</a>
    </span>
  </div>
  )
}

  return (
    <div>      
      {topNotification ()}
      {/* <div className="section-text__title-wrapper"> edited part */}
        <div className="section-text__title">Deftify - crypto without compromise
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(20)
                .changeDeleteSpeed(5)
                .typeString('<span class="big-text">Deftify is </span>')
                .typeString(SECTION_TITLES[0])
                .pauseFor(2000)
                .deleteChars(SECTION_TITLES[0].length)
                .typeString(SECTION_TITLES[1])
                .pauseFor(2000)
                .deleteChars(SECTION_TITLES[1].length + 3)
                .typeString(SECTION_TITLES[2])
                .pauseFor(2000)
                .deleteChars(SECTION_TITLES[2].length)
                .typeString('<span class="big-text">is </span>')
                .typeString(SECTION_TITLES[3])
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              wrapperClassName: 'smaller-title-text'
            }}
          /> edited part */}
        </div>
      {/*</div> edited part */}

      <div className="stroked-background">
        <Introduction />
        {/*<PhotoSlider slides={slides} /> edited part*/}
      </div>

      <PrivateAccessPad />

      <div className="stroked-background" style={{backgroundPosition: 'center 170px'}}>
        <PlayToEarn />
      </div>

      <Aggregator />
      <Partners />
      <Accessibility />

      <div>
        <ContactForm />
      </div>
    </div>
  );
};
