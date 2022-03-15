import React, {ReactElement} from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Flex from '../Flex';
import Spacing from '../Spacing';
import Text from '../Typography';
import './index.scss';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;

  ${({theme}) => theme.breakpoint.down('md')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const Footer = (): ReactElement => {
  return (
    <Spacing paddingHorizontal="20px" paddingTop="50px" paddingBottom="40px" background="#151515">
      <Flex itemsFlex={0.7} itemsFlexSm={1}>
        <Grid>
        <a href="https://testpap.deftify.io"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            PAP(Testnet)
          </Text></a>
          <a href="/"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Instant Watch
          </Text></a>
          <a href="/"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Indexes
          </Text></a>
          <a href="https://metacurse.gg/" target="_blank" rel="noopener noreferrer"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            MetaCurse
          </Text></a>
          <a href="./team"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Team
          </Text></a>
          <a href="https://www.deftify.io/docs/deftify_whitepaper.pdf" target="_blank" rel="noopener noreferrer"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Whitepaper
          </Text></a>
          {/* <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Contact Us
          </Text> */}
        </Grid>
      </Flex>

      <Spacing fullWidth marginTop="40px" marginTopSm="10px" className="social-wrapper">
        <div className="social-btns">
          <a
            className="social-btn"
            href="https://twitter.com/Deftify_"
            target="_blank"
            rel="noreferrer"><img src="./images/twitter-24.png" alt="Twitter" /></a>
          <a
            className="social-btn"
            href="https://t.me/deftify"
            target="_blank"
            rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <a
            className="social-btn"
            href="https://discord.gg/pQhq8k8T"
            target="_blank"
            rel="noreferrer"><img src="./images/discord-24.png" alt="Discord" /></a>
          <a
            className="social-btn"
            href="https://medium.com/deftify"
            target="_blank"
            rel="noreferrer"><img src="./images/medium-24.png" alt="Medium" /></a>
          <a
            className="social-btn"
            href="https://www.reddit.com/r/Deftify"
            target="_blank"
            rel="noreferrer"><img src="./images/reddit-24.png" alt="Reddit" /></a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/company/deftify"
            target="_blank"
            rel="noreferrer"><img src="./images/linkedin-24.png" alt="LinkedIn" /></a>
          <a
            className="social-btn"
            href="https://www.facebook.com/DeftifyApp"
            target="_blank"
            rel="noreferrer"><img src="./images/facebook-24.png" alt="Facebook" /></a>
          <a
            className="social-btn"
            href="https://www.instagram.com/deftify_"
            target="_blank"
            rel="noreferrer"><img src="./images/instagram-24.png" alt="Instagram" /></a>
        </div>
      </Spacing>

      <Spacing fullWidth marginTop="40px" marginTopSm="10px">
        <Flex flexDirectionSm="column" alignItems="flex-start">
          <Text
            color="rgba(255, 255, 255, 0.69);"
            textAlign="center"
            textAlignSm="left"
            fontSize={16}
            fontFamily="Euclid Circular A"
          >
            Terms of Use
          </Text>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <Text
            color="rgba(255, 255, 255, 0.69);"
            textAlign="center"
            textAlignSm="left"
            fontSize={16}
            fontFamily="Euclid Circular A"
          >
            Privacy Policy
          </Text>
        </Flex>
      </Spacing>
    </Spacing>
  );
};

export default withRouter(Footer);
