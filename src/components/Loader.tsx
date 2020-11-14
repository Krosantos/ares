/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";

type LoaderProps = {
  size: string;
  color: keyof DefaultTheme;
};

const pulse = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`;

const Grid = styled.div<LoaderProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  div {
    margin: 0px;
    position: absolute;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background: ${({ theme, color }) => theme[color]};
    animation: ${pulse} 1.2s linear infinite;
  }
  div:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  div:nth-child(2) {
    top: 10%;
    left: 40%;
    animation-delay: -0.4s;
  }
  div:nth-child(3) {
    top: 10%;
    left: 70%;
    animation-delay: -0.8s;
  }
  div:nth-child(4) {
    top: 40%;
    left: 10%;
    animation-delay: -0.4s;
  }
  div:nth-child(5) {
    top: 40%;
    left: 40%;
    animation-delay: -0.8s;
  }
  div:nth-child(6) {
    top: 40%;
    left: 70%;
    animation-delay: -1.2s;
  }
  div:nth-child(7) {
    top: 70%;
    left: 10%;
    animation-delay: -0.8s;
  }
  div:nth-child(8) {
    top: 70%;
    left: 40%;
    animation-delay: -1.2s;
  }
  div:nth-child(9) {
    top: 70%;
    left: 70%;
    animation-delay: -1.6s;
  }
`;

const Loader: React.FC<LoaderProps> = (props) => (
  <Grid {...props}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </Grid>
);

export default Loader;
