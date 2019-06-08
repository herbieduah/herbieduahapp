import { keyframes } from "styled-components";
export const Gradients = keyframes`
0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;

export const keyFrameExampleOne = keyframes`
  0% {
    height: 200px;
  }
  100% {
    height: 600px;
    background: orange;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const pulseRing = keyframes`
   0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
`;

export const pulseDot = keyframes`
   0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }

`;
