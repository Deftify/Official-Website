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
  margin-top: 48px;

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
            achievement="Ruddy worked with various crypto projects since 2018, including Publish0x, Remitano, and a CMO role for Lead Wallet. He’s also tech savvy and has good knowledge of backend development, can manage technical teams efficiently"
          />
          <Profile
            name="Olapade Samuel"
            position="Chief Marketing Officer"
            linkedIn="https://www.linkedin.com/in/engrsamest/"
            avatar="./images/profile/samuel.jpg"
            achievement="Diversified experience in crypto and project management. Samuel is a blockchain educator with deep connections to the African crypto industry. Previously with MantraDAO, Strongnode, Orion Protocol, NANO, Darwinia, Sentinel, and others"
          />
          <Profile
            name="Neil Mani"
            position="Chief Design Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/3.png"
            achievement="Neil is an experienced designer with more than seven years of experience in design leadership, strategic design, and user experience design. Neil brings his extensive design experience to Deftify and will oversee the UI/UX design"
          />
          <Profile
            name="Andrew Fennell"
            position="Chief Business Development"
            linkedIn="https://www.linkedin.com/in/andrewfennellbdm/"
            avatar="./images/profile/4.png"
            achievement="Andrew is an experienced sales professional who comes with over 12 years of experience in sales methodologies, relationship building, and account management. Most notably, Andrew played a vital role in DeSpace Protocol’s launch in late 2021"
          />

          <Profile
            name="Henry O."
            position="Chief Technical Officer"
            github="https://github.com/Hendobox"
            linkedIn="https://www.linkedin.com/in/henry-onyebuchi-116501123/"
            avatar="./images/profile/5.png"
            achievement="Henry is a smart-contract developer with over two years of experience in building decentralized applications in the blockchain industry. Work experience include Rarecandy3D, Lead Wallet, and DeSpace protocol. Has a master’s degree in Mechanical Engineering"
          />
          <Profile
            name="Kingsley Victor"
            position="Technical Lead"
            github="https://github.com/kingsley-einstein"
            linkedIn="https://www.linkedin.com/in/kingsley-victor-952550169/"
            avatar="./images/profile/6.png"
            achievement="Kingsley is a full-stack software engineer proficient in programming languages such as Java, JavaScript, Typescript and Solidity. He's a back-end developer at Lead Wallet and DeSpace, and a full-stack and smart contract engineer at Dogecoin 2.0"
          />
          <Profile
                  name="Nnadi Wisdom"
                  position="MetaCurse Game Director"
                  linkedIn="https://www.linkedin.com/feed/"
                  avatar="./images/profile/wisdom.png"
                  achievement="Nnadi Wisdom is a professional game developer with more than six years of experience. He’s proficient in making video games for multiple platforms, including mobile, PC, web-based, console, and virtual reality. With Deftify, he is responsible for MetaCurse game development and direction"
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
            achievement="Obasi has over 7 years of experience in the start-up environment, is the co-founder of Lead Wallet and DeSpace Protocol. Obasi will advise Deftify on strategies to build a successful DeFi and NFT brand"
          />
          <Profile
            name="CryptoEdit"
            position="Research & Content Lead"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/9.png"
            achievement="With experience producing engaging content, CryptoEdit has become synonymous with quality having helped many emerging and established projects. The CryptoEdit team help tell the projects story and provide ongoing research on the rapidly changing crypto landscape"
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
