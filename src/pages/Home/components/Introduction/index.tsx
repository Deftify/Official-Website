import {Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import {PlayIcon} from '../../../../assets/Icons';
import OutlinedButton from '../../../../components/Button/Outlined';
import RegularButton from '../../../../components/Button/Regular';
import Flex from '../../../../components/Flex';
import Spacing from '../../../../components/Spacing';
import './index.scss';
import {Modal} from '../../../../components/Modal';

const YOUTUBE_SRC = "https://www.youtube.com/embed/nDFLAh-3FYg?autoplay=1";

export const Introduction = () => {
  const iframeRef = useRef() as MutableRefObject<any>;

  const [showYoutubeModal, setShowYoutubeModal] = useState<boolean>(false);

  useEffect(() => {
    if (showYoutubeModal) {
      iframeRef.current.setAttribute('src', YOUTUBE_SRC);
    }
  }, [showYoutubeModal])

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
      <Spacing margin="auto" padding="0 20px 20px" className="intro-wrapper sec-one">

        <p className="section-text__description description">
          Deftify is the first Africa-focused launchpad and incubator - Africa is a big region with over 1200% growth in one year
          but it lacks infrastructure that it needs to be able to compete with other continents. Deftify has first mover advantage
          with its private access launchpad and incubator program that will be established both online and offline in various sites.
          On top of that, Deftify also offers market data aggregator tools (Instant Watch) and will incubate its own P2E game (MetaCurse), all using the same token staking mechanism
        </p>

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
      </Spacing>
    </Fragment>
    );
};
