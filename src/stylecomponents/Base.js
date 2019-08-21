import styled, { createGlobalStyle } from "styled-components";
import { fullScreenFill, marqueeLeft, marqueeRight } from "./Animations";
import { hideVisually } from "polished";
import { Tabs } from "react-tabs";
import {
	navBarBg,
	navBarButtonColor,
	navBarHoverFocus,
	navBarHoverFocusAction,
	// logoInnerFillColor,
	logoInnerFillColorHoverFocus,
	logoOuterFillColor,
	// logoBgColor,
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
	logoBorderRadius,
	modalFullScreenBg,
	modalFullScreenBgColor,
	modalFullScreenBgMobile,
	CTAColor,
	navBarBorder,
	logoBorderBottom,
	navBarBgComplement,
	navBarButtonComplementaryText,
	navBarButtonComplementaryHoverText,
	fontColorOpposite,
	fontColorComplement,
	logoInnerFillColor
} from "./Themes/ThemeVariables";
import {
	mobile,
	absoluteOverlay,
	mainTransition,
	fontColor,
	bgColor,
	hideScrollbar,
	navBarSize,
	fluidTypeInfo,
	// container,
	// contentMenuPaddingRight,
	// contentMenuPadding,
	tablet,
	paddingLR,
	slightBoxShadowBelow,
	userSelectNone
} from "./StyleHelpers";

import { revealSecs } from "../helpers";

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

// display: flex;
//     overflow: hidden;
//     margin-top: auto;
//     margin-right: 20px;
//     margin-left: auto;
//     -webkit-box-orient: horizontal;
//     -webkit-box-direction: normal;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-transform: rotate(-90deg);
//     -ms-transform: rotate(-90deg);
//     transform: rotate(-90deg);
//     -webkit-transform-origin: 100% 100%;
//     -ms-transform-origin: 100% 100%;
//     transform-origin: 100% 100%;
//     font-family: Radnika, sans-serif;
//     font-size: 12px
export const NavBarMiniContainer = styled.div`
	position: fixed;
  	padding: 1rem ${navBarSize};
	${mobile} {
		padding: .5rem 1rem;
	}
	${tablet} {
		padding: .5rem 1rem;
	}
    z-index: 1000;
    display: flex;
	background: ${props =>
		props.navBarComplement ? navBarBgComplement : navBarBg};
	${props => (props.navBarComplement ? slightBoxShadowBelow : `box-shadow:none`)};
	width: 100vw;
	background: ${props => (props.modalVisible ? modalFullScreenBg : ``)}!important;
	${props => (props.modalVisible ? `box-shadow:none` : ``)};
	border-bottom: ${props => (props.modalVisible ? navBarBorder : ``)};
	align-items: center;
 	width: ${props => props.appHeight}px;
	justify-content: space-between;
	${userSelectNone}
	button {
		border-bottom: 0;  
		${mainTransition}
		padding: 0;
		color: ${props =>
			props.navBarComplement
				? navBarButtonComplementaryText
				: navBarButtonColor};
		&:hover,&:focus {
			border-bottom: 0;
			color:  ${props =>
				props.navBarComplement
					? navBarButtonComplementaryHoverText
					: navBarHoverFocus};
		}
		a {
			text-decoration: none;
			color: ${props =>
				props.navBarComplement
					? navBarButtonComplementaryText
					: navBarButtonColor};
				&:hover,&:focus {
				color:  ${props =>
					props.navBarComplement
						? navBarButtonComplementaryHoverText
						: navBarHoverFocus};
				}
		}
	}
	.navbar {
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;	
		}

		&__logo-menu{
			display: flex;
			align-items: center;
		}
		
		&__logo {
			.inner-rect, .half-circle {
				${mainTransition}
				fill: ${fontColor};	
			}
			.outer-rect {
				${mainTransition}
				fill: ${logoOuterFillColor};
				fill-opacity: 0;
			}
			svg {
				${mainTransition}
				/* transform: scale(.09); */
				width: 2.5rem;
				height: 2.5rem;
				path {
					
					fill: ${logoBgHoverColor};
				}
				background:transparent;
				border-radius: ${logoBorderRadius};
				${mainTransition}
				&:hover,&:focus {
					path {
						fill: ${CTAColor};
					}
					.inner-rect, .half-circle {
						fill: ${fontColorComplement};	
					}
				}
		}
	}
}`;
export const NavBarContainer = styled.div`
	position: fixed;
    top: ${props => (props.navBarRight ? `-${navBarSize}` : `0`)};
	${props => (props.navBarRight ? `right: 0` : `left: 0`)};
    z-index: 1000;
	transform-origin: ${props => (props.navBarRight ? `right bottom` : `left top`)};
    display: flex;
	overflow-x: auto;
	${hideScrollbar}
	background: ${props =>
		props.navBarComplement ? navBarBgComplement : navBarBg};
	border-bottom: ${props => (props.navBarRight ? `none` : navBarBorder)}; 
	border-top:  ${props => (props.navBarRight ? navBarBorder : `none`)}; 
	${props =>
		props.navBarComplement
			? `
	border-bottom: none !important;
	border-top: none !important;
	`
			: ``}; 
	
    /* margin-top: auto;
    margin-left: auto; */
    flex-direction: row-reverse;
	/* flex-direction: row-reverse; */
	/* transform-origin: left top; */
	align-items: center;
	transform: rotate(-90deg) ${props =>
		props.navBarRight ? `` : `translateX(-100%)`};  
	/* transform: rotate(-90deg) translateX(-100%);   */
 	width: ${props => props.appHeight}px;
	height: ${navBarSize};
	justify-content: space-between;
	${userSelectNone}
	button {
		border-bottom: 0;
		padding: 0 ${navBarSize};
		height: 100%;
		${mainTransition}
		color: ${props =>
			props.navBarComplement
				? navBarButtonComplementaryText
				: navBarButtonColor};
		&:hover,&:focus {
			border-bottom: 0;
			transform: ${navBarHoverFocusAction};
			color:  ${props =>
				props.navBarComplement
					? navBarButtonComplementaryHoverText
					: navBarHoverFocus};
		}
		a {
			text-decoration: none;
			color: ${props =>
				props.navBarComplement
					? navBarButtonComplementaryText
					: navBarButtonColor};
				&:hover,&:focus {
				border-bottom: 0;
				transform: ${navBarHoverFocusAction};
				color:  ${props =>
					props.navBarComplement
						? navBarButtonComplementaryHoverText
						: navBarHoverFocus};
				}
		}
	}
	.navbar {
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;	
		}

		&__logo-menu{
			a {
				display: flex;
				align-items: center;
				flex-direction: row-reverse;
			}
			button {
				padding: 0;
				padding-right: .5rem;
				height: 2.5rem;
			}
		}
		
		&__logo {
			transform: rotate(90deg);
			/* margin-right: 2.5rem; */
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
				background: transparent;
				border-bottom: ${logoBorderBottom};
				border-radius: ${logoBorderRadius};
				border:  ${props => (props.navBarComplement ? logoBorderBottom : `none`)}; 
				margin-top: 2px;
				border-right:  ${props =>
					props.navBarComplement ? logoBorderBottom : `none`}; 
				${mainTransition}
				&:hover,&:focus {
					background: ${logoBgHoverColor};
					border-bottom: none;
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
			white-space: nowrap;
			&:last-child {
				margin-right: 0;
			}
			&:first-child {
				margin-left: 0;
			}
			${tablet} {
				margin: 0 0.6rem;
			}
			${mobile} {
				margin: 0 0.65rem;
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
	animation: ${fullScreenFill} 3s forwards;
	pointer-events: none;
	z-index: 30;
`;

export const DragInstructionsContainer = styled.div`
	${absoluteOverlay}
	height: ${navBarSize};
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

export const DownloadAll = styled.div`
	${absoluteOverlay};
	${hideVisually()};
	pointer-events: none;
`;

export const FlexContainer = styled.div`
	display: block;
	width: 100%;
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		margin: 0;
	}
	${props =>
		props.isPortrait
			? `
			overflow: hidden;
			`
			: ``};
	.less {
		&__media-wrapper {
			display: flex;
			width: 100%;
			${hideScrollbar};
			height: 100%;

			${props =>
				props.isPortrait
					? `
			flex-direction: row;
			overflow-x:auto;
			`
					: `
			flex-direction: column;
			`};
		}
	}

	.react-reveal {
		img,
		video {
			${props =>
				props.isPortrait
					? `
			height: 23vh !important;
			width: auto !important;
			margin: 0 0.5rem !important;`
					: `
			height: auto !important;
			width: 100% !important;
			`};
		}
	}
`;

export const ThemeCircleContainer = styled.li`
	display: flex;
	list-style-type: none;
	flex-direction: column;
	/* margin: 0.5rem; */
	justify-content: center;
	width: 33%;
	cursor: pointer;
	.themeCircle {
		&__container {
			width: 100%;
		}
		&__button {
			${mainTransition}
			position: relative;
			width: 9.5rem;
			height: 9.5rem;
			${mobile} {
				width: 5rem;
				height: 5rem;
			}
			${tablet} {
				width: 7rem;
				height: 7rem;
			}
			margin: 0 auto;
			display: block;
			border-radius: 50%;
			cursor: pointer;
			background: ${props =>
				props.isPortrait
					? props.themeValues.gradientPortrait
					: props.themeValues.gradient};
			border: 3px solid ${fontColor};
			&.current {
				border: 3px solid ${fontColorOpposite};
				cursor: default;
			}
			&:hover,
			&:focus {
				transform: scale(1.1);
			}
		}
		&__text {
			color: ${CTAColor};
			text-align: center;
			width: 100%;
			display: block;
			cursor: pointer;
			padding: 0.25rem;
			margin-bottom: 1rem;
			&.current {
				color: ${fontColor};
				cursor: default;
			}
		}
		&__selected {
			${absoluteOverlay}
			display:flex;
			justify-content: center;
			align-items: center;
			span {
				color: ${fontColor};
			}
		}
	}
`;

export const TransitionTextContainer = styled.li`
	position: relative;
	list-style-type: none;
	margin-bottom: 1.5rem;
	display: flex;
	width: 100%;
	${mobile} {
		margin-bottom: 1rem;
	}
	button.current {
		color: ${fontColor};
	}
	span.animated {
		animation-duration: ${revealSecs}ms;
	}
	span {
		display: inline-block;
	}
`;

export const FullScreenOverlayContainer = styled.div`
	overflow: hidden;
	z-index: 100;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	${hideScrollbar}
	.modal {
		&__container{
			position:relative;
			${mobile}{
				margin-top: 2.5rem;	
			}
			margin-top: 5rem;
			height:100%;
			overflow: auto;
			${hideScrollbar}
		}
		&__content {
			${absoluteOverlay};
			overflow: auto;
			padding-bottom: 200px;
			${hideScrollbar}

		}
	}
	nav {
		height: 100%;
		display: block;
		overflow: auto;
		${paddingLR};
	}
	.react-tabs {
		&__tab-list {
			padding: 0;
		}
	}
	.subMenu {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		${mobile} {
			display:block
		}
		&__item {
			margin-bottom: 1.5rem;
			list-style-type: none;
			margin-right: ${navBarSize};
			
			white-space: nowrap;
			${mobile} {
				margin-right: 0;
			}
		}
		&__text {
			margin-top: 1rem;
			${mobile} {
				margin-top: 2.5rem;
			}
		}
	}
		
	&::before {
		content:'';
		/* filter: blur(5px); */
		${absoluteOverlay}
		background: ${modalFullScreenBg};
		/* background-color: ${modalFullScreenBgColor}; */
		${mobile} {
			background: ${modalFullScreenBgMobile};	
		}
		opacity: .9;
		z-index: -1;
	}
	
`;

export const MarqueeWrapper = styled.div`
	/* transform: translateX(100%); */
	width: 100%;
	overflow: hidden;
	p,
	span {
		/* transform: translateX(100%); */
		animation: ${props => (props.left ? marqueeLeft : marqueeRight)} 10s linear
			infinite;
		width: 100%;
		&:focus,
		&:focus {
			animation-play-state: paused;
		}
	}
`;

export const MatrixContainer = styled.div`
	${absoluteOverlay}
	canvas {
		${tablet} {
			width: 150vw !important;
			height: 200vh !important;
		}
		${mobile} {
			width: 150vw !important;
			height: 200vh !important;
		}
	}
`;
