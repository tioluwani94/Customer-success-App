/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { Global, css, jsx, keyframes } from "@emotion/core";
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-color: ${props => props.border};
  border-top-color: ${props => props.color};
  border-left-color: ${props => props.color};
  animation: ${spin} ${props => props.speed}s linear infinite;
  border-style: solid;
  border-width: ${props => props.thickness};
  border-radius: 50%;  
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
`;

export function Spinner({ color, size, speed, thickness, border }) {
  return (
    <StyledSpinner
      {...{ color, size, speed, thickness, border }}
      className="Spinner"
      role="alert"
      ariaLive="assertive"
    />
  );
}

Spinner.defaultProps = {
  size: 16,
  color: "red",
  speed: 0.3,
  marginLeft: 0,
  thickness: "2px",
  border: "rgba(255,255,255,0.2)"
};

const HomePageSpinnerStyle = css`
  position: absolute;
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageSpinner = () => (
  <div css={HomePageSpinnerStyle}>
    <Spinner color="rgb(0, 100, 230)" size={32} border="rgba(0,0,0,.1)" />
  </div>
);