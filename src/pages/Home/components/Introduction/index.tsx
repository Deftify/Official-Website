import {Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import {PlayIcon} from '../../../../assets/Icons';
import OutlinedButton from '../../../../components/Button/Outlined';
import RegularButton from '../../../../components/Button/Regular';
import Flex from '../../../../components/Flex';
import Spacing from '../../../../components/Spacing';
import './index.scss';
import {Modal} from '../../../../components/Modal';

const YOUTUBE_SRC = "https://www.youtube.com/embed/v6dwaofaFD8?autoplay=1";

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
          The world’s first Africa-focused crypto incubator and launchpad offering investors private round
          access to
          cutting-edge African innovation. In addition, our diverse index funds and integrated portfolio management tools
          give investors an edge not available on other launchpads
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
                Watch Video
              </OutlinedButton>
            </Spacing>
          </Flex>
        </Spacing>
        {/*end of buttons*/}
      </Spacing>
    </Fragment>
    );
};
