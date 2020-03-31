import React from "react";
import styled, { keyframes } from "styled-components";

export const keyFrameMainPage = keyframes`
   0% {
        transform: translateY(-70%);
        opacity: 0;
    }
    100% {
        transform: rotate(0) translateY(0);
        opacity: 1;
    }
  `;
