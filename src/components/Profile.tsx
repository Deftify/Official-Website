import React, { ReactElement } from "react";
import styled from "styled-components";
import { GitHubIcon, LinkedInIcon } from "../assets/Icons";
import Flex from "./Flex";
import Spacing from "./Spacing";
import Text from "./Typography";

interface Props {
  name: string;
  position: string;
  linkedIn: string;
  avatar: string;
  github?: string;
  achievement: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const Avatar = styled.img`
  border-radius: 25px;
  width: 100%;
`;

function Profile({ name, position, linkedIn, avatar, github, achievement }: Props): ReactElement {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Spacing marginTop="32px">
        <Flex justifyContent="space-between">
          <div>
            <Text fontSize={21} fontWeight={500} color="#FFFFFF">
              {name}
            </Text>
            <Text fontSize={15} color=" rgba(255, 255, 255, 0.6);">{position}</Text>
          </div>

          <Spacing marginLeft="10px">
            <Flex>
              <a href={linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              {github && (
                <Spacing marginRight="5px">
                  <a href={github} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                </Spacing>
              )}
            </Flex>
          </Spacing>
        </Flex>
      </Spacing>
      <Text fontSize={15} color="#FFFFFF">{achievement}</Text>
    </Wrapper>
  );
}

export default Profile;
