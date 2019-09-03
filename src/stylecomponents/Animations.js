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

// animation: marquee 10s linear infinite;
export const marqueeLeft = keyframes`
0% {
  transform: translateX(100%)
	}
	100% {
	transform: translateX(-100%);
	}
`;

export const marqueeRight = keyframes`
0% {
  transform: translateX(-100%)
	}
	100% {
	transform: translateX(100%);
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

export const fullScreenFill = keyframes`
   to { 
   background-size: 100% 100%;
  }
`;

export const fadeEnter = keyframes`
   from {
			opacity: 0;
	}
`;
export const fadeLeave = keyframes`
  to {
			opacity: 0;
	}
`;

export const zoomEnter = keyframes`
  from {
			transform: scale3d(0.3, 0.3, 0.3);
		}
`;

export const zoomLeave = keyframes`
  to {
			transform: scale3d(0.3, 0.3, 0.3);
	}
`;

export const slideDownEnter = keyframes`
  from {
			transform: translate3d(0, -100px, 0);
		}
`;

export const slideDownLeave = keyframes`
  to {
			transform: translate3d(0, -100px, 0);
		}
`;

export const slideLeftEnter = keyframes`
  from {
			-webkit-transform: translate3d(-150px, 0, 0);
			transform: translate3d(-150px, 0, 0);
		}
`;

export const slideLeftLeave = keyframes`
  to {
			-webkit-transform: translate3d(-150px, 0, 0);
			transform: translate3d(-150px, 0, 0);
		}
`;

export const scrollDownTouch = keyframes`
  0% {
    transform: translate(-50%,40px) scale(0.5,0.5);
    opacity: 1;
    animation-timing-function: ease-in;
  }
  10% {
    transform: translate(-50%,20px) scale(0.4,0.65);
    animation-timing-function: ease-out;
  }
  20% { 
    transform: translate(-50%,0px) scale(0.6,0.4);
    animation-timing-function: ease;
  }
  30% {
    transform: translate(-50%,0px) scale(0.5,0.5);
    animation-timing-function: ease-in;
    opacity: 1;
    filter: blur(0px);
  }
  50% {
    transform: translate(-50%,0px) scale(0.9,0.9);
    opacity: .4;
    filter: blur(.5px);
  }
  65% {
    transform: translate(-50%,20px) scale(1,1.2);
    filter: blur(1px);
    opacity: .3;
  }
  80% {
    transform: translate(-50%,40px) scale(1.05,0.95);
    animation-timing-function: ease-out;
    opacity: .4;
    filter: blur(.5px);
  }
  100% {
    transform: translate(-50%,40px) scale(0.5,0.5);
    opacity: 1;
    filter: blur(0px);
  }
`;

export const scrollDownMouse = keyframes`
0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(scrollMouseSize/4);
  }
`;
