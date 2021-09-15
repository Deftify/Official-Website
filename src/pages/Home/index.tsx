import React from "react";
import styled from "styled-components";
import { Button, Image, Text, CustomDiv } from "../../components";
import imgUrl from "../../assets/img/image_8.png";
import imgUrl2 from "../../assets/img/mask_group.png";
import imgUrl3 from "../../assets/img/mask_group2.png";

const ColumnFlex = styled(CustomDiv)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <div>
    <Image
      position="absolute"
      src={imgUrl}
      width={1230}
      height={922}
      left={1}
      top={1}
      alt="Image_8"
    />
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={97}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Play n'Earn
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={163}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Private Arena
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={229}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Instant Watch
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={97}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      About
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={163}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      Staking
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={229}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      Contact
    </Button>
    <Text
      position="absolute"
      width={149}
      height={43}
      left={74}
      top={778}
      color="#fff"
      fontSize={36}
      lineHeight={43}
    >
      ABOUT
    </Text>
    <Text
      position="absolute"
      width={451}
      height={373}
      left={74}
      top={847}
      color="#fff"
      fontSize={18}
      lineHeight={26}
    >
      Deftify is a Decentralised DeFi and NFT platform that focuses on private funding, mentorship
      of African focused Blockchain projects and founders with the aim of attracting all forms of
      social, financial and technical value to the continent of Africa. The platform also focused on
      building a DeFi and NFT market data aggregator for better cryptocurrency market insights for
      traders, investors, companies and crypto enthusiasts in general. Deftify is also positioning
      itself in the play-to-earn gaming model leveraging a multichain model built on Solana,
      Avalanche, and Fantom Blockchains.
    </Text>
    <ColumnFlex
      position="absolute"
      width={335}
      height={825}
      border="3px solid"
      borderImage="linear-gradient(#5ffcf9, #412047) 1"
      right={1}
      top={778}
      transform="translateX(8px)"
    >
      <Text
        position="relative"
        margin="43px 89px 0 85px"
        fontWeight="bold"
        width={124}
        height={70}
        color="#ea05b8"
        lineHeight={70}
        fontSize={48}
      >
        2021
      </Text>
      <Text
        position="relative"
        margin="8px 68px 0px 64px"
        fontWeight="normal"
        color="#fff"
        width={166}
        height={69}
        fontSize={18}
        lineHeight={26}
      >
        Birth of the project
      </Text>
      <Text
        position="relative"
        margin="43px 89px 0 85px"
        fontWeight="bold"
        width={124}
        height={70}
        color="#ea05b8"
        lineHeight={70}
        fontSize={48}
      >
        $10m
      </Text>
      <Text
        position="relative"
        margin="8px 68px 0px 64px"
        fontWeight="normal"
        color="#fff"
        width={166}
        height={69}
        fontSize={18}
        lineHeight={26}
      >
        attracted in private sale
      </Text>
      <Text
        position="relative"
        margin="43px 89px 0 85px"
        fontWeight="bold"
        width={124}
        height={70}
        color="#ea05b8"
        lineHeight={70}
        fontSize={48}
      >
        100k+
      </Text>
      <Text
        position="relative"
        margin="8px 68px 0px 64px"
        fontWeight="normal"
        color="#fff"
        width={166}
        height={69}
        fontSize={18}
        lineHeight={26}
      >
        smart investors and crypto experts
      </Text>
      <Text
        position="relative"
        margin="43px 89px 0 85px"
        fontWeight="bold"
        width={124}
        height={70}
        color="#ea05b8"
        lineHeight={70}
        fontSize={48}
      >
        100+
      </Text>
      <Text
        position="relative"
        margin="8px 68px 0px 64px"
        fontWeight="normal"
        color="#fff"
        width={166}
        height={69}
        fontSize={18}
        lineHeight={26}
      >
        projects with investments
      </Text>
    </ColumnFlex>
    <Image
      position="absolute"
      src={imgUrl2}
      width={249}
      height={249}
      left={107}
      top={1328}
      alt="Image_8"
    />
    <Text
      position="absolute"
      width={375}
      height={70}
      left={74}
      top={1595}
      color="#fff"
      fontSize={48}
      lineHeight={70}
      fontWeight="bold"
    >
      Private Arena
    </Text>
    <Text
      position="absolute"
      width={451}
      height={373}
      left={74}
      top={1683}
      color="#fff"
      fontSize={18}
      lineHeight={26}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries,Lorem Ipsum is simply dumm
    </Text>
    <Image
      position="absolute"
      src={imgUrl3}
      width={248}
      height={248}
      right={159}
      top={1782}
      alt="Image_8"
    />
    <Text
      position="absolute"
      width={376}
      height={70}
      right={80}
      top={2059}
      color="#fff"
      fontSize={48}
      lineHeight={70}
      fontWeight="bold"
    >
      Instant Watch
    </Text>
    <Text
      position="absolute"
      width={361}
      height={237}
      right={102}
      top={2146}
      color="#fff"
      fontSize={18}
      lineHeight={26}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries,Lorem Ipsum is simply dumm
    </Text>
  </div>
);

export default Home;
