import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import ClickNHold from "react-click-n-hold";
import { fullScreenFill } from "./Animations";
import { Tabs } from "react-tabs";
import {
	mobile,
	absoluteOverlay,
	overlayBackground,
	mainTransition,
	fontColor,
	bgColor,
	hideScrollbar,
	navBarSize,
	slightBoxShadowBelow
} from "./StyleHelpers";
import { Colors } from "../Pages";
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
	width:  ${props => (props.isMobile ? `2rem` : `3rem`)};
	height: ${props => (props.isMobile ? `2.5rem` : `2rem`)};
	border-radius: ${props => (props.isMobile ? `1rem` : `none`)};
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
	position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10000;
    display: flex;
    overflow: hidden;
    /* margin-top: auto;
    margin-left: auto; */
    flex-direction: row-reverse;
	transform-origin: left top;
	align-items:center;
  	transform: rotate(-90deg) translateX(-100%);  
 	width: ${props => props.appHeight}px;
	height: ${navBarSize};
	justify-content: space-between;
	user-select: none;
	button {
		border-bottom: 0;
		margin:0 ${navBarSize};
		${mainTransition}
		color: ${props => rgba(props.theme.fontColor, 0.6)};
		&:hover,&:focus {
			border-bottom: 0;
			 transform: scale(1.1);
			color: ${props => props.theme.fontColor};
		}
	}
	.react-reveal {
			z-index: 100;
			position: relative;
	}
	.navbar {
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;
		}
		&__logo-menu{
			display: flex;
		}
			
		&__menu-text {
			margin: 0;
			display: flex;
			${mainTransition}
			&:hover {
				transform: scale(1.1);
			}
		}

		&__fullScreen{
			max-width: 740px;
			width: 100%;
			margin: 0 auto;
			padding-top: 4rem;
			${hideScrollbar}
			overflow: auto;
			.react-tabs {
				&__tab-list {
					padding:0;
				}
			}
			.subMenu {
				padding: 0;
				&__item {
					margin-bottom: 1.5rem;
				}
			}
		}
		
		
		&__logo {
			/* margin: 0 ${navBarSize}; */
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
				width: ${navBarSize};
				
				${mainTransition}
			&:hover,&:focus {
				transform: scale(1.1);
				.outer-rect {
				fill-opacity: 1;
			}
			}
		}

		
		
	}
}
	
`;

export const ReactTabs = styled(Tabs)`
	-webkit-tap-highlight-color: transparent;
	width: 100%;
	overflow: hidden;

	.react-tabs {
		&__tab-list {
			display: flex;
			margin-top: 0;
			justify-content: space-between;
			width: 100%;
			overflow-x: auto;
			${hideScrollbar}
			${mobile} {
			}
		}

		&__tab {
			${mainTransition}
			cursor: pointer;
			margin: 0 1rem;

			&:last-child {
				margin-right: 0;
			}
			&:first-child {
				margin-left: 0;
			}
			${mobile} {
				margin: 0 0.4rem;
			}
			span {
				color: ${props => rgba(props.theme.fontColor, 0.6)};
				&:focus,
				&:hover {
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
					}
				}
			}
			&--disabled {
				cursor: default;
			}
		}

		&__tab-panel {
			display: none;
			width: 100%;
			overflow: hidden;
			&--selected {
				display: block;
				width: 100%;
				overflow: hidden;
			}
		}
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
