import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Spacing from "./Spacing";

interface Props {
  featuredImage: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const FeaturedImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

function IntroductionFeaturesImage({ featuredImage }: Props): ReactElement {
  return (
    <Wrapper>
      <FeaturedImage src={featuredImage} />
      <Spacing marginTop="10px">
        <Flex justifyContent="space-between">
        </Flex>
      </Spacing>
    </Wrapper>
  );
}

export default IntroductionFeaturesImage;
