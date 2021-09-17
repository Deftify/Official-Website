import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface ButtonProps {
  position: "absolute" | "relative" | "fixed" | "static";
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  border: string;
  boxSizing?: string;
  boxShadow?: string;
  backgroundColor: string;
  color: string;
}

const Button = styled("button")<ButtonProps & CommonDefs>`
  position: ${props => props.position || "relative"};
  width: ${props => (!!props.width ? props.width + "px" : "150px")};
  height: ${props => (!!props.height ? props.height + "px" : "40px")};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};
  border: ${props => props.border || "none"};
  box-sizing: ${props => props.boxSizing || undefined};
  background-color: ${props => props.backgroundColor || "black"};
  color: ${props => props.color || "#fff"};
  box-shadow: ${props => props.boxShadow || undefined};
  cursor: pointer;
  transform: ${props => props.transform || undefined};
  transition: transform 1s ease-in-out;
  ${props =>
    !!props.mouseEvents &&
    props.mouseEvents.length > 0 &&
    props.mouseEvents.map(e => {
      return `&:${e.name} ${e.definition}`;
    })}

  ${props =>
    !!props.mobileScreensDefinitions &&
    props.mobileScreensDefinitions.length > 0 &&
    props.mobileScreensDefinitions.map(def => {
      return `@media screen and (max-width: ${def.screenSize + "px"}) ${def.definition}`;
    })}
`;

export default Button;
