import React, {ReactElement, useEffect, useState} from 'react';
import {ContactForm} from '../../components/ContactForm';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import Profile from '../../components/ColumnsFormatting/Profile';
import ProfileImage from '../../components/ColumnsFormatting/ProfileImage'; //edited part => for desktop/tablet
import ProfileText from '../../components/ColumnsFormatting/ProfileText'; //edited part => for desktop/tablet
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

  const [deviceWidth, setDeviceWidth] = useState<string>('');

  //edited part from here
  useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth <= 1023) {
				setDeviceWidth('mobile');
			}
			if (window.innerWidth > 1023) {
				setDeviceWidth('desktop');
			}
		};
		window.addEventListener('resize', checkWidth, { passive: true });
		checkWidth();
		return () => window.removeEventListener('resize', checkWidth);
	}, []);//edited part to here

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
        

        {/* edited part From Here */}
        {deviceWidth === 'mobile' ? (
				  <Spacing>
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
            achievement="Ruddy worked with various crypto projects since 2018, including Publish0x, Remitano, and a CMO role for Lead Wallet. He???s also tech savvy and has good knowledge of Web3 apps and project development, he can manage technical teams efficiently."
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
            achievement="Nano is a software engineer with more than 3 years??? experience in software engineering and 1+ years??? experience in blockchain development. He is also a strong engineering professional with a B.Eng focused in Electrical and Electronics Engineering from University of Benin"
          />
          <Profile
            name="Nnadi Wisdom"
            position="MetaCurse Game Director"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/wisdom.png"
            achievement="Nnadi Wisdom is a professional game developer with more than six years of experience. Wisdom is proficient in making video games for multiple platforms, including for mobile games, PC, and even virtual reality ecosystem. With Deftify, he is responsible for MetaCurse development and direction of the game"
          />
          <Profile
            name="Henry Onyebuchi"
            position="Smart Contract"
            github="https://github.com/Hendobox"
            linkedIn="https://www.linkedin.com/in/henry-onyebuchi-116501123/"
            avatar="./images/profile/5.png"
            achievement="Henry is a smart-contract developer with over two years of experience in building decentralized applications in the blockchain industry. Work experience include Rarecandy3D, Lead Wallet, and DeSpace protocol. Henry has a master???s degree in Mechanical Engineering"
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
				  ) : deviceWidth === 'desktop' ? (
            <Spacing>
            <ProfileGrid>   
                <ProfileImage
                  avatar="./images/profile/1.png"
                />
                <ProfileImage
                  avatar="./images/profile/2.png"
                />
                <ProfileImage
                  avatar="./images/profile/samuel.png"
                />
                <ProfileImage
                  avatar="./images/profile/philip.png"
                />
              </ProfileGrid>
              <ProfileGrid>
              <ProfileText
                  name="Victoria Haruna"
                  position="Chief Executive Officer"
                  linkedIn="https://www.linkedin.com/in/victoria-iko-ojo-ugbedeojo-7b35aa80/"
                  achievement="Vicky is an experienced growth manager and crypto entrepreneur.
                  She founded BeCryptoWiz and she grew significant crypto communities of Corestarter.
                  She's a proficient networker with extensive contacts in the African crypto ecosystem"
                />
              <ProfileText
                  name="Ruddy S. Gunawan"
                  position="Chief Operating Officer"
                  linkedIn="https://www.linkedin.com/in/ruddy-setiadi-gunawan/"
                  achievement="Ruddy worked with various crypto projects since 2018, including Publish0x, 
                  Remitano, and a CMO role for Lead Wallet. He???s also tech savvy and has good knowledge of Web3 apps
                  and project development, he can manage technical teams efficiently."
                />
              <ProfileText
                  name="Olapade Samuel"
                  position="Chief Marketing Officer"
                  linkedIn="https://www.linkedin.com/in/engrsamest/"
                  achievement="Diversified experience in crypto and project management. Samuel is a blockchain
                   educator with deep connections to the African crypto industry. Previously with MantraDAO,
                    Strongnode, Orion Protocol, NANO, Darwinia, Sentinel, and others"
                />  
              <ProfileText
                  name="Philip Akhilome "
                  position="Chief Technology Officer"
                  github="https://github.com/akhils10"
                  linkedIn="https://www.linkedin.com/in/philip-akhilome/"
                  achievement="Philip is a highly innovative polyglot software engineer and blockchain developer with over 10 years programming experience. He is a co-founder at Guild Protocol, Buttons Labs and Techmybrand. Has experiences leading distributed teams"
                      />     
              </ProfileGrid>
              <ProfileGrid>
                <ProfileImage
                  avatar="./images/profile/3.png"
                />
                <ProfileImage
                  avatar="./images/profile/nano.png"
                />
                <ProfileImage
                  avatar="./images/profile/wisdom.png"
                />
                <ProfileImage
                  avatar="./images/profile/5.png"
                />
              </ProfileGrid>
              <ProfileGrid>
              <ProfileText
                  name="Neil Mani"
                  position="Chief Design Officer"
                  linkedIn="https://www.linkedin.com/feed/"
                  achievement="Neil Mani is an experienced designer with more than seven years of experience in design leadership, video making, user journey, strategic design, and user experience design. Neil brings his extensive design experience to Deftify and will oversee the UI/UX design"
                />
              <ProfileText
                  name="Revival Nano"
                  position="Frontend Dev"
                  github="https://github.com/nano235"
                  linkedIn="https://www.linkedin.com/in/revival-nano-adolor/"
                  achievement="Nano is a software engineer with more than 3 years??? experience in software engineering and 1+ years??? experience in blockchain development. He is also a strong engineering professional with a B.Eng focused in Electrical and Electronics Engineering from University of Benin"
                />
              <ProfileText
                  name="Nnadi Wisdom"
                  position="MetaCurse Game Director"
                  linkedIn="https://www.linkedin.com/feed/"
                  achievement="Nnadi Wisdom is a professional game developer with more than six years of experience. Wisdom is proficient in making video games for multiple platforms, including for mobile games, PC, and even virtual reality ecosystem. With Deftify, he is responsible for MetaCurse development and direction of the game"
                />
              <ProfileText
                  name="Henry Onyebuchi"
                  position="Smart Contract"
                  github="https://github.com/Hendobox"
                  linkedIn="https://www.linkedin.com/in/henry-onyebuchi-116501123/"
                  achievement="Henry is a smart-contract developer with over two years of experience in building decentralized applications in the blockchain industry. Work experience include Rarecandy3D, Lead Wallet, and DeSpace protocol. Henry has a master???s degree in Mechanical Engineering"
                />  
              </ProfileGrid>
              <ProfileGrid>
                <ProfileImage
                  avatar="./images/profile/avatar.png"
                />
              </ProfileGrid>
              <ProfileGrid>
                <ProfileText
                  name="Jay Wang"
                  position="Business Development Manager"
                  linkedIn="https://www.linkedin.com/feed/"
                  achievement="Jay is a graduate of Leiden University in the Netherlands. He has ten years of experience in public relations and business development with strong connections to media, KOLs and communities in Asia"
                />  
              </ProfileGrid>
              </Spacing>
				  ) : (
					''
				  )}

        {/* to Here */}

      </Spacing>

      <Spacing paddingHorizontal="60px" paddingHorizontalSm="20px" marginBottom="120px">
        <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center" mb="48px">
          Advisors
        </Text>

        {/* edited part From Here */}
        {deviceWidth === 'mobile' ? (
          <Spacing>
          <ProfileGrid>
          <Profile
            name="Obasi Francis Ifegwu"
            position="Strategic Advisor"
            linkedIn="https://www.linkedin.com/in/obasi-francis-ifegwu-79829794/"
            avatar="./images/profile/7.png"
            achievement="Obasi has over 7 years of experience in the start-up environment, he is the CEO of Cassava Network and DeSpace Protocol. With his massive experience, Obasi will advise Deftify on strategies to build a successful DeFi and NFT brand for the entire Deftify ecosystem."
          />
          <Profile
            name="CryptoEdit"
            position="Research & Content Lead"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/9.png"
            achievement="With experience producing engaging content, CryptoEdit has become synonymous with quality, having helped many emerging and established projects. The CryptoEdit team help tell the projects story and provide ongoing research on the rapidly changing crypto industry and landscape."
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
            achievement="Startup mentor and corporate innovator, leading teams, managing major projects. Worked for a corporation investing in crypto before it was fashionable. Now focused on helping teams avoid simple mistakes."
          />
        </ProfileGrid>
        </Spacing>
          ) : deviceWidth === 'desktop' ? (
            <Spacing>
            <ProfileGrid>   
                <ProfileImage
                  avatar="./images/profile/7.png"
                />
                <ProfileImage
                  avatar="./images/profile/9.png"
                />
                <ProfileImage
                  avatar="./images/profile/raed.png"
                />
                <ProfileImage
                  avatar="./images/profile/marcin.png"
                />
            </ProfileGrid>
            <ProfileGrid>
              <ProfileText
                name="Obasi Francis Ifegwu"
                position="Strategic Advisor"
                linkedIn="https://www.linkedin.com/in/obasi-francis-ifegwu-79829794/"
                achievement="Obasi has over 7 years of experience in the start-up environment, he is the CEO of Cassava Network and DeSpace Protocol. With his massive experience, Obasi will advise Deftify on strategies to build a successful DeFi and NFT brand for the entire Deftify ecosystem"
                    />
              <ProfileText
                name="CryptoEdit"
                position="Research & Content Lead"
                linkedIn="https://www.linkedin.com/feed/"
                achievement="With experience producing engaging content, CryptoEdit has become synonymous with quality, having helped many emerging and established projects. The CryptoEdit team help tell the projects story and provide ongoing research on the rapidly changing crypto industry and landscape"
                    />
              <ProfileText
                name="Raed Arrar"
                position="Visionary/Strategic Advisor"
                linkedIn="https://www.linkedin.com/in/raedarrar/"
                achievement="Worked with startups in the past 30+ years of International Business Development and Venture Capital experience.  His passion revolves around blockchain and metaverse where can regularly be found testing new strategies. His main focus is building partnerships with a singular vision."
                    />  
              <ProfileText
                name="Marcin Kolago"
                position="Operations Advisor"
                linkedIn="https://www.linkedin.com/in/marcinkolago/"
                achievement="Marcin is a startup mentor and corporate innovator, leading teams, and managing major projects. He worked for a corporation investing in crypto before it was fashionable. Now he's more focused on helping various teams avoid simple mistakes."
                    />     
            </ProfileGrid>
            </Spacing>
          ) : (
          ''
          )}

        {/* to Here */}
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
