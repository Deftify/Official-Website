import React, {ReactElement} from 'react';
import {ContactForm} from '../../components/ContactForm';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import Profile from '../../components/Profile';
import Spacing from '../../components/Spacing';
import Text from '../../components/Typography';

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
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
      <Spacing paddingTop="120px" paddingBottom="160px" paddingHorizontal="60px" paddingHorizontalSm="20px">
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
            position="CEO and Co-Founder"
            linkedIn="https://www.linkedin.com/in/victoria-iko-ojo-ugbedeojo-7b35aa80/"
            avatar="./images/profile/1.png"
            achievement="Experienced growth manager and crypto entrepreneur
            Founded crypto education business BeCryptoWiz with a 10k+ community
            Grew significant crypto communities, including 100k+ Corestarter and 50k+ Lead Wallet
            Proficient networker since 2018, with extensive contacts in the African crypto ecosystem"
          />
          <Profile
            name="Ruddy S. Gunawan"
            position="COO and Co-Founder"
            linkedIn="https://www.linkedin.com/in/ruddy-setiadi-gunawan/"
            avatar="./images/profile/2.png"
            achievement="test test"
          />
          <Profile
            name="Olapade Samuel"
            position="Chief Marketing Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/samuel.jpg"
            achievement="test test"
          />
          <Profile
            name="Neil Mani"
            position="Chief Design Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/3.png"
            achievement="test test"
          />
          <Profile
            name="Andrew Fennell"
            position="Chief Business Development Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/4.png"
            achievement="test test"
          />

          <Profile
            name="Henry Onyebuchi"
            position="Chief Technical Officer"
            github="https://github.com/Hendobox"
            linkedIn="https://www.linkedin.com/in/henry-onyebuchi-116501123/"
            avatar="./images/profile/5.png"
            achievement="test test"
          />
          <Profile
            name="Kingsley Victor"
            position="Technical Lead"
            github="https://github.com/kingsley-einstein"
            linkedIn="https://www.linkedin.com/in/kingsley-victor-952550169/"
            avatar="./images/profile/6.png"
            achievement="test test"
          />
           <Profile
                  name="Jay Wang"
                  position="Business Development Manager"
                  linkedIn="https://www.linkedin.com/feed/"
                  avatar="./images/profile/avatar.png"
                  achievement="test test"
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
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/7.png"
            achievement="test test"
          />
          <Profile
            name="CryptoEdit"
            position="Research & Content Lead"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/9.png"
            achievement="test test"
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
