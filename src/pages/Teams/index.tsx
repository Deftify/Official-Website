import React, {ReactElement} from 'react';
import {ContactForm} from '../../components/ContactForm';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import Profile from '../../components/Profile';
import Spacing from '../../components/Spacing';
import Text from '../../components/Typography';

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 0px;
  margin-top: 40px;

  ${({theme}) => theme.breakpoint.down('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  ${({theme}) => theme.breakpoint.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Teams = (): ReactElement => {
  return (
    <div>
      <Spacing paddingTop="120px" paddingBottom="75px" paddingHorizontal="60px" paddingHorizontalSm="20px">
        <Flex itemsFlex={0.6} itemsFlexLg={1}>
          <div>
            <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center">
              Meet the People Building Deftify
            </Text>

            <Text fontWeight={500} textAlign="center">
              Deftify team members come from diverse backgrounds but all share proven track records in the
              cryptocurrency space.
            </Text>
          </div>
        </Flex>

        <ProfileGrid>
          <Profile
            name="Victoria Haruna"
            position="Chief Executive Officer"
            linkedIn="https://www.linkedin.com/in/victoria-iko-ojo-ugbedeojo-7b35aa80/"
            avatar="./images/profile/1.png"
            achievement="Vicky is an experienced growth manager and crypto entrepreneur.
            She founded BeCryptoWiz and she grew significant crypto communities of Corestarter.
            She's a proficient networker with extensive contacts in the African crypto ecosystem"
          />
          <Profile
            name="Ruddy S. Gunawan"
            position="Chief Operating Officer"
            linkedIn="https://www.linkedin.com/in/ruddy-setiadi-gunawan/"
            avatar="./images/profile/2.png"
            achievement="Ruddy worked with various crypto projects since 2018, including Publish0x, Remitano, and a CMO role for Lead Wallet. He’s also tech savvy and has good knowledge of Web3 apps and project development, he can manage technical teams efficiently."
          />
          <Profile
            name="Olapade Samuel"
            position="Chief Marketing Officer"
            linkedIn="https://www.linkedin.com/in/engrsamest/"
            avatar="./images/profile/samuel.png"
            achievement="Diversified experience in crypto and project management. Samuel is a blockchain educator with deep connections to the African crypto industry. Previously with MantraDAO, Strongnode, Orion Protocol, NANO, Darwinia, Sentinel, and others"
          />
          <Profile
            name="Philip Akhilome "
            position="Chief Technology Officer"
            github="https://github.com/akhils10"
            linkedIn="https://www.linkedin.com/in/philip-akhilome/"
            avatar="./images/profile/philip.png"
            achievement="Philip is a highly innovative polyglot software engineer and blockchain developer with over 10 years programming experience. He is a co-founder at Guild Protocol, Buttons Labs and Techmybrand. Has experiences leading distributed teams"
          />
          <Profile
            name="Neil Mani"
            position="Chief Design Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/3.png"
            achievement="Neil Mani is an experienced designer with more than seven years of experience in design leadership, video making, user journey, strategic design, and user experience design. Neil brings his extensive design experience to Deftify and will oversee the UI/UX design"
          />
          <Profile
            name="Revival Nano"
            position="Frontend Dev"
            github="https://github.com/nano235"
            linkedIn="https://www.linkedin.com/in/revival-nano-adolor/"
            avatar="./images/profile/nano.png"
            achievement="Nano is a software engineer with more than 3 years’ experience in software engineering and 1+ years’ experience in blockchain development. He is also a strong engineering professional with a B.Eng focused in Electrical and Electronics Engineering from University of Benin"
          />
          <Profile
                  name="Nnadi Wisdom"
                  position="MetaCurse Game Director"
                  linkedIn="https://www.linkedin.com/feed/"
                  avatar="./images/profile/wisdom.png"
                  achievement="Nnadi Wisdom is a professional game developer with more than six years of experience. Wisdom is proficient in making video games for multiple platforms, including for mobile games, PC, and even virtual reality ecosystem. With Deftify, he is responsible for MetaCurse development and direction of the game"
          />
           <Profile
                  name="Jay Wang"
                  position="Business Development Manager"
                  linkedIn="https://www.linkedin.com/feed/"
                  avatar="./images/profile/avatar.png"
                  achievement="Jay is a graduate of Leiden University in the Netherlands. He has ten years of experience in public relations and business development with strong connections to media, KOLs and communities in Asia"
          />
        </ProfileGrid>
      </Spacing>

      <Spacing paddingHorizontal="60px" paddingHorizontalSm="20px" marginBottom="120px">
        <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center" mb="48px">
          Advisors
        </Text>

        <ProfileGrid>
          <Profile
            name="Obasi Francis Ifegwu"
            position="Strategic Advisor"
            linkedIn="https://www.linkedin.com/in/obasi-francis-ifegwu-79829794/"
            avatar="./images/profile/7.png"
            achievement="Obasi has over 7 years of experience in the start-up environment, he is the CEO of Cassava Network and DeSpace Protocol. With his massive experience, Obasi will advise Deftify on strategies to build a successful DeFi and NFT brand for the entire Deftify ecosystem"
          />
          <Profile
            name="CryptoEdit"
            position="Research & Content Lead"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/9.png"
            achievement="With experience producing engaging content, CryptoEdit has become synonymous with quality, having helped many emerging and established projects. The CryptoEdit team help tell the projects story and provide ongoing research on the rapidly changing crypto industry and landscape"
          />
           <Profile
            name="Raed Arrar"
            position="Visionary/Strategic Advisor"
            linkedIn="https://www.linkedin.com/in/raedarrar/"
            avatar="./images/profile/raed.png"
            achievement="Worked with startups in the past 30+ years of International Business Development and Venture Capital experience.  His passion revolves around blockchain and metaverse where can regularly be found testing new strategies. His main focus is building partnerships with a singular vision."
          />
          <Profile
            name="Marcin Kolago"
            position="Operations Advisor"
            linkedIn="https://www.linkedin.com/in/marcinkolago/"
            avatar="./images/profile/marcin.png"
            achievement="Former startup mentor, corporate innovator, team leader, and managing major projects. He is the CEO and Founder of Coinerro . Has been working with various blockchain-related startups and also Member of the Supervisory Board at Fundacja Polska Debatuje"
          />

        </ProfileGrid>
      </Spacing>

      <Spacing
        background="#181A1C"
        style={{borderRadius: 20}}
      >
        <ContactForm />
      </Spacing>
    </div>
  );
};

export default Teams;
