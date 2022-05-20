import React, { InputHTMLAttributes, ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  ${({ theme }) => theme.breakpoint.down("md")} {
    margin-bottom: 38px;
  }
`;

const InputStyle = styled.input<{ notEmpty: boolean }>`
  outline: 0;
  width: 100%;
  padding: 17.5px 24px;
  font-family: "Euclid Circular A";
  font-style: normal;
  font-weight: 500;
  font-size: 15.5px;
  line-height: 143.5%;
  background: ${({ notEmpty }) => (notEmpty ? "#151515" : "rgba(37, 44, 54, 0.43)")};
  border-radius: 4px;
  border: 2px solid;
  border-color: ${({ notEmpty }) => !notEmpty && "transparent"};
  color: #fff5f5;
  border-image-slice: 1;
  border-radius: 13px; 
  border-image-source: ${({ notEmpty }) => notEmpty && "linear-gradient(to bottom, #fcd98d9e, #37f4fe83)"};
  margin-top: 12px;
  &:focus,
  &:active {
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-color: #fcd98d9e;
  }
`;
//border-image-source: linear-gradient(to bottom, #fcd98d9e, #37f4fe83);
const Label = styled.label<{ notEmpty: boolean }>`
  font-family: "Euclid Circular A";
  font-style: normal;
  font-weight: 400;
  font-size: 15.5px;
  line-height: 143.5%;
  /* identical to box height, or 23px */
  color: ${({ notEmpty }) => (notEmpty ? "#fff5f5" : " rgba(255, 245, 245, 0.59)")};
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  
}

function TextField({ label, value, ...rest }: Props): ReactElement {
  return (
    <Wrapper>
      <Label notEmpty={value ? true : false}>
        {label && label}
        <InputStyle notEmpty={value ? true : false} value={value} {...rest} />
      </Label>
    </Wrapper>
  );
}

export default TextField;
