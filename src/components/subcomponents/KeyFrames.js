import { keyframes } from "styled-components";

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

export const glowing = keyframes` 

{
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

`;
