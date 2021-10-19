import styled from "styled-components";

interface Props {
  stretch?: boolean;
  color?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

const OutlinedButton = styled.button<Props>`
  height: ${({ stretch }) => stretch && "100%"};
  background: #151515;
  border-radius: 6px;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to bottom, #fcd98d9e, #37f4fe83);
  font-size: 18px;
  font-family: "Gilroy";
  font-weight: 800;
  margin-left: ${({ ml }) => ml};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  min-width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || "#FFF"};
  padding: 15px 20px;
  ${({ theme }) => theme.breakpoint.down("lg")} {
    font-size: 16px;
    min-width: 200px;
  }

  ${({ theme }) => theme.breakpoint.down("sm")} {
    font-size: 14px;
    min-width: 180px;
  }
`;

export default OutlinedButton;
