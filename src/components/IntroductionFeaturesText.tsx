import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Spacing from "./Spacing";
import Text from "./Typography";

interface Props {
  explanation: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

function IntroductionFeaturesText({ explanation }: Props): ReactElement {
  return (
    <Wrapper>  
      <Spacing marginTop="-15px">
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

export default IntroductionFeaturesText;
