import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Spacing from "../Spacing";
import Text from "../Typography";

interface Props {
  featuredImage: string;
  explanation: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const FeaturedImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

function IntroductionFeatures({ featuredImage, explanation }: Props): ReactElement {
  return (
    <Wrapper>
      <FeaturedImage src={featuredImage} />
      <Spacing marginTop="10px">
        <Flex justifyContent="space-between">
          <div>
            <Text fontSize={18} fontWeight={500} color="#FFFFFF">
              {explanation}
            </Text>
          </div>
        </Flex>
      </Spacing>
    </Wrapper>
  );
}

export default IntroductionFeatures;