import styled, { createGlobalStyle } from "styled-components";
import { fullScreenFill } from "./Animations";
import { Tabs } from "react-tabs";
import {
	navBarBg,
	navBarButtonColor,
	navBarHoverFocus,
	navBarHoverFocusAction,
	logoInnerFillColor,
	logoInnerFillColorHoverFocus,
	logoOuterFillColor,
	logoBgColor,
	logoBgHoverColor,
	tabHeadingsJustifyContent,
	tabHeadingsBorderRadius,
	tabHeadingsBorder,
	tabHeadingsColor,
	tabHeadingsColorHoverFocus,
	tabHeadingsColorActive,
	tabHeadingsBorderBottomActive,
	tabHeadingsBorderActive,
	fullScreenHoldBg,
	logoBorderRadius
} from "./Themes/ThemeVariables";
import {
	mobile,
	absoluteOverlay,
	mainTransition,
	fontColor,
	bgColor,
	hideScrollbar,
	navBarSize,
	fluidTypeInfo
} from "./StyleHelpers";

export const GlobalStyle = createGlobalStyle`
  html {
	box-sizing: border-box;
	
}
*, *:before, *:after {
  box-sizing: inherit;
}

  body {
		button:focus {
			outline: 0;
		}
		${fluidTypeInfo}
  }
  
`;

export const NavBarContainer = styled.div`
	position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10000;
    display: flex;
	overflow-x: auto;
	${hideScrollbar}
	background: ${navBarBg};
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
		margin: 0 ${navBarSize};
		height: 100%;
		${mainTransition}
		color: ${navBarButtonColor};
		&:hover,&:focus {
			border-bottom: 0;
			transform: ${navBarHoverFocusAction};
			color: ${navBarHoverFocus};
		}
	}
	.navbar {
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;	
		}

		&__logo-menu{
			display: flex;
		}
		
		&__logo {
			transform: rotate(90deg);
			margin-right: 2.5rem;
			/* margin: 0 ${navBarSize}; */
			.inner-rect, .half-circle {
				${mainTransition}
				fill: ${logoInnerFillColor};	
			}
			.outer-rect {
				${mainTransition}
				fill: ${logoOuterFillColor};
				fill-opacity: 0;
			}
			svg {
				${mainTransition}
				transform: scale(.95);
				border: none;
				width: ${navBarSize};
				height: ${navBarSize};
				background: ${logoBgColor};
				border-radius: ${logoBorderRadius};
				${mainTransition}
				&:hover,&:focus {
					background: ${logoBgHoverColor};
					.inner-rect, .half-circle {
						fill: ${logoInnerFillColorHoverFocus};
					}
				}
		}
	}
}
	
`;

// *TODO tabHeadingsColorHoverFocus:`${fontColorSecondary}`,
// *TODO tabHeadingsColorActive:`${fontColorSecondary}`,
export const ReactTabs = styled(Tabs)`
	-webkit-tap-highlight-color: transparent;
	width: 100%;
	overflow: hidden;

	.react-tabs {
		&__tab-list {
			display: flex;
			margin-top: 0;
			justify-content: ${tabHeadingsJustifyContent};
			width: 100%;
			overflow-x: auto;
			list-style-type: none;
			${hideScrollbar}
			border:0;
			border-radius: 0;
		}

		&__tab {
			${mainTransition}
			cursor: pointer;
			margin: 0 1rem;
			border: ${tabHeadingsBorder};
			border-radius: ${tabHeadingsBorderRadius};
			&:last-child {
				margin-right: 0;
			}
			&:first-child {
				margin-left: 0;
			}
			${mobile} {
				margin: 0 0.5rem;
			}
			span {
				color: ${tabHeadingsColor};
				&:focus,
				&:hover {
					color: ${tabHeadingsColorHoverFocus};
				}
			}

			&--selected {
				border: ${tabHeadingsBorderActive};
				border-bottom: ${tabHeadingsBorderBottomActive};
				span {
					font-weight: bold;
					color: ${tabHeadingsColorActive};
					&:hover {
						color: ${tabHeadingsColorActive};
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

// *TODO 	fullScreenHoldBg:` linear-gradient( ${invert(bgColor)}, ${invert(bgColor)}),
export const FullScreeningBG = styled.div`
	${absoluteOverlay}
	background: ${fullScreenHoldBg}  no-repeat 0 0;
	/* mix-blend-mode: multiply; */
	opacity: 1;
	background-size: 100% 0%;
	animation: ${fullScreenFill} 2s forwards;
	pointer-events: none;
	z-index: 30;
`;

export const DragInstructionsContainer = styled.div`
	${absoluteOverlay}
	height: ${navBarSize}
	display:flex;
	align-items: center;
	justify-content: center;
	background-color: ${fontColor};
	p {
		color: ${bgColor};
		padding: 0.6rem 0.7rem;
		text-align: center;
		margin: 0  ${navBarSize};
	}
`;

export const GradientCircle = styled.button`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background: ${props =>
		props.isPortrait
			? props.themeValues.gradientPortrait
			: props.themeValues.gradient};
	border: 1 px solid ${props => props.themeValues.borderColor};
`;

export const ParallaxContainer = styled.div`
	${absoluteOverlay};
	overflow: hidden;
	z-index: 1000;
	.parallax {
		&__container {
			width: 100%;
			height: 100%;
		}
		&__bg {
			width: 90%;
			height: 90%;
			background: url("https://fillmurray.com/400/800");
			background-size: contain;
		}
	}
`;
