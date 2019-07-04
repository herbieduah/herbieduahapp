import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import ClickNHold from "react-click-n-hold";
import { fullScreenFill } from "./Animations";
import {
	mobile,
	absoluteOverlay,
	overlayBackground,
	bgColor,
	fontColor,
	mainTransition,
	bgColorGradient

	// fluidTypeInfo,
	// ctaColor,
	// iconWidth
} from "./StyleHelpers";
// import { iconFullScreen } from "../helpers";

export const GlobalStyle = createGlobalStyle`
  html {
	box-sizing: border-box;
	
}
*, *:before, *:after {
  box-sizing: inherit;
}

  body {
    /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
		/* overflow: hidden; */
		position: fixed;
		width: 100%;
		height: 100%;
		overscroll-behavior: contain;
		@import url("https://use.typekit.net/zzt6omx.css");
		font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		button {
			font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
		/* position: relative; */
		.sizer {
			${absoluteOverlay};
			height: 20vh;
		}
		#root {
			width: 100%;
			height:100%;
		}
		button:focus {
			outline: 0;
		}

	
		.instructions {
			${absoluteOverlay};
			/* height: 100%; */
			display: flex;
			margin-top: 4rem;
			justify-content: center;
			z-index: 10;
			&__text {
			${mainTransition}
			color: ${bgColor};
			background: ${fontColor};
			${props => `box-shadow: 0 0 40px ${rgba(props.theme.bgColor, 0.6)};`}
			padding: .5rem 1rem;
			display: inline-block;
			font-size: 1rem;
			border-radius: 2rem;
			${mobile} {
				margin-top: 2rem;	
			}
		}
		}

  }
  
`;

export const Overlay = styled.div`
  ${absoluteOverlay}
  background-color: ${overlayBackground};
  z-index: 10;
`;

// export function imgLoad(width, height) {
// 	return `${(height / width) * 100}%`;
// }

export const FullScreenContainer = styled(ClickNHold)`
	font-weight: 700;
	${mainTransition}
	line-height: 1;
	border: 0;
	padding: 0;
	width:  ${props => (props.isPortrait ? `2rem` : `3rem`)};
	height: ${props => (props.isPortrait ? `2.5rem` : `2rem`)};
	border-radius: ${props => (props.isPortrait ? `1rem` : `none`)};
	display: flex;
	background: none;
	cursor: pointer;

	.fullScreen {
			/* width: ${props => props.ww}px; */
			width: 100%;
			/* width: 2rem; */
			border: 2px solid ${props => props.theme.fontColor};
			&:hover,
			&:focus {
				background: ${props => props.theme.fontColor};
			}
		
	}
`;

export const NavBarContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	z-index: 10;
	padding: 0 2rem;
	align-items: center;
	height: 3rem;
	${mobile} {
		padding: 0 1.5rem;
	}
`;

export const FullScreeningBG = styled.div`
	${absoluteOverlay}
	background: linear-gradient(  #4a148c, #7352ad, #9e8bcb, #ccc4e6, #ffffff)  no-repeat 0 0;
	/* mix-blend-mode: multiply; */
	opacity: 0.7;
	background-size: 100% 0%;
	animation: ${fullScreenFill} 2s forwards;
	pointer-events: none;
	z-index: 30;
`;

export const HerbieDuahApp = styled.div`
	/* height: 90%; */

	width: 100%;
	content: "";
	overflow: hidden;
	background-image: ${bgColorGradient};
	position: relative;
	margin: 0;
	height: 100%;
	
	.hdapp {
		&__logo {
			
			
			
			.inner-rect, .half-circle {
				${mainTransition}
				fill: ${bgColor};
				
			}
			.outer-rect {
				${mainTransition}
				fill: ${fontColor};
			}
			svg {
				${mainTransition}
				border: none;
				/* margin-left: 2rem; */
				${mobile} {
					/* margin-left: 1.5rem; */
				}
			${mainTransition}
			&:hover,&:focus {
				transform: scale(1.1);
				z-index: 10;
			}
			}
			svg:hover,svg:focus  {
				/* .inner-rect, .half-circle {
					fill: ${fontColor};
				}
				.outer-rect {
					fill: ${bgColor};
				}
				border: 1px solid ${fontColor}; */
				
			}
		
		}
	}
	button {
			font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	${props => {
		if (props.isPortrait) {
			return `
				position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-bottom: 3px solid red;
		z-index: 10;`;
		}
	}}
	

	.container {
		max-width: 740px;
		width: 100%;
		margin: 0 auto;
	}
	.container-full {
		width: 100%;
	}
	.col-50 {
		width: 50%;
		${mobile} {
			width: 100%;
		}
	}
	.resizer-pane {
		position: relative;
		z-index: 20;
		&:before {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		top: -15px;
		pointer-events: none;
		display: ${props => (props.isPortrait ? "block" : "none")};
		opacity: ${props => (props.dragging ? "0" : "1")};
		box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};
		/* box-shadow: 0 0 3rem 3rem blue, 0 0 2rem 2rem blue; */
		${mobile} {
			box-shadow: 0 0 2.5rem 2.5rem ${bgColor}, 0 0 1.5rem 1.5rem ${bgColor};
			/* box-shadow: 0 0 2rem 2rem blue, 0 0 1rem 1rem blue; */
			opacity: ${props => (props.dragging ? "0" : "1")};
			display: ${props => (props.isPortrait ? "block" : "none")};
		}
	}
		&:after {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 40px;
		pointer-events: none;
		display: ${props => (props.isPortrait ? "block" : "none")};
		opacity: ${props => (props.dragging ? "0" : "1")};
		box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};
		/* box-shadow: 0 0 3rem 3rem blue, 0 0 2rem 2rem blue; */
		${mobile} {
			box-shadow: 0 0 2rem 2rem ${bgColor}, 0 0 1.5rem 1.5rem ${bgColor};
			/* box-shadow: 0 0 2rem 2rem blue, 0 0 1rem 1rem blue; */
			opacity: ${props => (props.dragging ? "0" : "1")};
			display: ${props => (props.isPortrait ? "block" : "none")};
		}
	}
	}

	&:before {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		pointer-events: none;
		opacity: ${props => (props.dragging ? "0" : "1")};
		box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};
		${mobile} {
			box-shadow: 0 0 2rem 2rem ${bgColor}, 0 0 1rem 1rem ${bgColor};
			opacity: ${props => (props.dragging ? "0" : "1")};
		}
	}
	&:after {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		opacity: ${props => (props.dragging ? "0" : "1")};
		pointer-events: none;
		box-shadow: 0 0 100px 100px ${bgColor}, 0 0 50px 50px ${bgColor};
		${mobile} {
			box-shadow: 0 30px 30px ${bgColor}, 0 0 15px 15px ${bgColor};
			opacity: ${props => (props.dragging ? "0" : "1")};
	}
		}

		.react-tabs {
  		-webkit-tap-highlight-color: transparent;
  		width: 100%;
		overflow:hidden;


		&__tab-list {
			/* border-bottom: 1px solid #aaa;
			margin: 0 0 10px;
			padding: 0; */
			display:flex;
			/* margin: 0 0 3%; */
			justify-content: space-between;
			width: 100%;
			margin-right: auto;
			${mobile}{
				width: 300px;
				overflow-x: auto;
			}
			
		}

		&__tab {
			/* display: inline-block;
			border: 1px solid transparent;
			border-bottom: none;
			bottom: -1px;
			position: relative;
			list-style: none;
			padding: 6px 12px; */
			${mainTransition}
			cursor: pointer;
			margin: 0 1rem;
			${mobile} {
				margin: 0 .3rem;
			}
			span {
				color: ${props => rgba(props.theme.fontColor, 0.6)};
				&:focus,&:hover {
					color: ${fontColor};
				}
			}
			
			&--selected {
				border-bottom: 2px solid ${fontColor};
				span {
					font-weight: bold;
					color: ${fontColor};
					&:hover {
						color: ${fontColor};
					};
				}
				}
			

			&--disabled {
			/* color: GrayText; */
			cursor: default;
			}

			
			
		}

		&__tab-panel {
			display: none;
			width: 100%;
			overflow:hidden;
			&--selected {
			display: block;
			width: 100%;
			overflow:hidden;
			}
		}
}
	
`;
