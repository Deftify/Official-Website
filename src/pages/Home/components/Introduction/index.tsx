import {Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import {PlayIcon} from '../../../../assets/Icons';
import OutlinedButton from '../../../../components/Button/Outlined';
import RegularButton from '../../../../components/Button/Regular';
import styled from 'styled-components';
import Flex from '../../../../components/Flex';
import IntroductionFeatures from '../../../../components/IntroductionFeatures'; //edited part => for mobile
import IntroductionFeaturesImage from '../../../../components/IntroductionFeaturesImage'; //edited part => for desktop/tablet
import IntroductionFeaturesText from '../../../../components/IntroductionFeaturesText'; //edited part => for desktop/tablet
import Spacing from '../../../../components/Spacing';
import './index.scss';
import {Modal} from '../../../../components/Modal';

const YOUTUBE_SRC = "https://www.youtube.com/embed/ojI-W87vclI?autoplay=1";

const IntroductionGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 0px;
  margin-top: 40px;

  ${({theme}) => theme.breakpoint.down('lg')} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  ${({theme}) => theme.breakpoint.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`; //edited part

export const Introduction = () => {
  const [deviceWidth, setDeviceWidth] = useState<string>('');
  const iframeRef = useRef() as MutableRefObject<any>;

  const [showYoutubeModal, setShowYoutubeModal] = useState<boolean>(false);

  useEffect(() => {
    if (showYoutubeModal) {
      iframeRef.current.setAttribute('src', YOUTUBE_SRC);
    }
  }, [showYoutubeModal])

  //edited part from here
  useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth <= 599) {
				setDeviceWidth('mobile');
			}
			if (window.innerWidth > 600) {
				setDeviceWidth('desktop');
			}
		};
		window.addEventListener('resize', checkWidth, { passive: true });
		checkWidth();
		return () => window.removeEventListener('resize', checkWidth);
	}, []);//edited part to here

  const toggleYoutubeModal = () => {
    setShowYoutubeModal(!showYoutubeModal);
  }

  const handleModalClose = () => {
    setShowYoutubeModal(false);
    iframeRef.current.setAttribute('src', null);
  }


  return (
    <Fragment>
      <Modal show={showYoutubeModal} onClose={handleModalClose}>
        <div className="video-responsive">
          <iframe
            ref={iframeRef}
            width="950"
            height="534"
            src=''
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </div>
      </Modal>
      <Spacing margin="auto" padding="0 10px 10px">
      <Spacing margin="auto" padding="1px 20px 20px" className="intro-wrapper sec-one">
        <div className="section-text__description description">
        As the world’s first Africa-focused crypto incubator and launchpad, Deftify offers private round access to cutting-edge African innovations.
          On top of that, Deftify also offers market data aggregator tools and is incubating its own P2E game, all using the same Deftify token (DFTY) staking mechanism
        </div>
      </Spacing>
        {/*buttons*/}
        <Spacing>
          <Flex flexDirectionSm="column">
            <a
              href="./docs/deftify_whitepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <RegularButton stretch mr="40px" marginRightSm="0px" marginBottomSm="20px">
                Whitepaper
              </RegularButton>
            </a>

            <Spacing>
              <OutlinedButton backgroundColor="transparent" onClick={toggleYoutubeModal}>
                <PlayIcon style={{marginRight: 10}} />
                Intro Video
              </OutlinedButton>
            </Spacing>
          </Flex>
        </Spacing>
        {/*end of buttons*/}
        {deviceWidth === 'mobile' ? (
				  <Spacing>
          <IntroductionGrid>   
              <IntroductionFeatures
                featuredImage="./images/features/features1.svg"
                explanation="Deftify’s Private Access Pad will grant users access to untapped markets, especially in Africa"
              />
              <IntroductionFeatures
                featuredImage="./images/features/features2.svg"
                explanation="Introducing Metacurse, Deftify’s own metaverse P2E game that will utilize Deftify token (DFTY)"
              />
              <IntroductionFeatures
                featuredImage="./images/features/features3.svg"
                explanation="Our market data aggregator is like DexTools + DefiLlama + OpenSea data aggregator all at once"
              />
            </IntroductionGrid>
            </Spacing>
				  ) : deviceWidth === 'desktop' ? (
          <Spacing>
          <IntroductionGrid>   
          <IntroductionFeaturesImage
            featuredImage="./images/features/features1.svg"
          />
          <IntroductionFeaturesImage
            featuredImage="./images/features/features2.svg"
          />
          <IntroductionFeaturesImage
            featuredImage="./images/features/features3.svg"
          />
          </IntroductionGrid>
          <IntroductionGrid>
          <IntroductionFeaturesText
            explanation="Deftify’s Private Access Pad will grant users access to untapped markets, especially in Africa"
          />
          <IntroductionFeaturesText
              explanation="Introducing Metacurse, Deftify’s own metaverse P2E game that will utilize Deftify token (DFTY)"
            />
          <IntroductionFeaturesText
              explanation="Our market data aggregator is like DexTools + DefiLlama + OpenSea data aggregator all at once"
            />  
          </IntroductionGrid>
          </Spacing>
				  ) : (
					''
				  )}
        
        </Spacing>
    </Fragment>
    );
};
