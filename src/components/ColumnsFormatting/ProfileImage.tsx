import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Spacing from "../Spacing";

interface Props {
  avatar: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const Avatar = styled.img`
  border-radius: 25px;
  width: 100%;
`;

function ProfileImage({ avatar }: Props): ReactElement {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Spacing marginTop="0px">
        <Flex justifyContent="space-between">
        </Flex>
      </Spacing>
    </Wrapper>
  );
}

export default ProfileImage;
