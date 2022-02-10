import {PhotoSlider, Slide} from '../../components/PhotoSlider';
import {Accessibility} from './components/Accessibility';
import {Aggregator} from './components/Aggregator';
import {ContactForm} from '../../components/ContactForm';
import {Introduction} from './components/Introduction';
import {Partners} from './components/Partners';
import {PlayToEarn} from './components/PlayToEarn';
import {PrivateAccessPad} from './components/PrivateAccessPad';
import './index.scss';
import {useEffect, useState} from 'react';
import Typewriter from 'typewriter-effect';

export const slides: Slide[] = [
  {
    caption: 'Deftify’s Private Access Pad grants access to untapped markets, especially in Africa',
    image:   './images/slide-one.svg'
  }, {
    caption: 'Deftify’s Instant Watch helps traders to analyze DeFi projects across different networks',
    image:   './images/slider-02.svg'
  },
  {
    caption: 'Deftify Indexes present opportunities on altcoins from alternative chains',
    image:   './images/slider-04.svg'
  }, {
    caption: 'Introducing Metacurse, Deftify’s own metaverse P2E game that will utilize Deftify token (DFTY)',
    image:   './images/slider-03.svg'
  }
];

const SECTION_TITLES = [
  'an Africa-focused crypto launchpad and incubator, connecting African innovations to the world.',
  'a market data aggregator service [imagine DexTools + DefiLlama + OpenSea data aggregator all in one space].',
  'an index funds with exposure on multiple chains unlike DeFi Pulse Index funds that is limited on Ethereum',
  'a P2E PvP and PvE game (Metacurse) powered by Deftify token (DFTY).',
];

export const Home = () => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div>
      <div className="section-text__title-wrapper">
        <div className="section-text__title">
          <Typewriter
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
          />
        </div>
      </div>

      <div className="stroked-background">
        <Introduction />
        <PhotoSlider slides={slides} />
      </div>

      <PrivateAccessPad />

      <div className="stroked-background" style={{backgroundPosition: 'center 170px'}}>
        <PlayToEarn />
      </div>

      <Aggregator />
      <Partners />
      <Accessibility />

      <div
        className="stroked-background" style={{backgroundPosition: 'center 247px'}}>
        <ContactForm />
      </div>
    </div>
  );
};
