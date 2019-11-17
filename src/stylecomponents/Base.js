import styled, { createGlobalStyle } from "styled-components";
import {
	fullScreenFill,
	marqueeLeft,
	marqueeRight,
	scrollDownTouch,
	scrollDownMouse
} from "./Animations";
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
	bgColor,
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
	// fontColorOpposite,
	navBarButtonActive,
	logoInnerFillColor,
	fontColor,
	borderThin,
	CTAUnderline,
	colorSlightOpacity,
	appfontFamily,
	appfontFamilyTertiary,
	fontColorOpposite,
	buttonBackgroundHoverFocus,
	buttonBorderActive,
	buttonColorHoverFocus
} from "./Themes/ThemeVariables";
import {
	mobile,
	absoluteOverlay,
	mainTransition,
	hideScrollbar,
	navBarSize,
	fluidTypeInfo,
	// container,
	// contentMenuPaddingRight,
	// contentMenuPadding,
	tablet,
	// paddingLRSm,
	// slightBoxShadowBelow,
	userSelectNone,
	marginLRSm,
	marginTopXLarge,
	paddingLRSm,
	paddingTBSm,
	marginTopMed,
	marginTopSm,
	marginBottomMed
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
  	padding: ${navBarSize};
	${mobile} {
		padding:.5rem 1rem;
	}
    z-index: 1000;
    display: flex;
	background: ${props =>
		props.navBarComplement ? navBarBgComplement : navBarBg};
	border: ${props => (props.navBarComplement ? borderThin : "none")};
	width: 100vw;
	
	align-items: center;
 	/* width: ${props => props.appHeight}px; */
	justify-content: space-between;
	${userSelectNone}
	button { 
		${mainTransition}
		padding: 0;
		
		a {
			cursor: pointer;
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

			&.active {
				text-decoration: ${CTAUnderline};
			}
		}
	}
	.navbar {
		
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;	
		}
		&__logo-menu, &__logo {
			${paddingLRSm};
			${mobile} {
				padding-left: 0;
				padding-right: 0;
			}
		}
		&__logo-link.active{
			svg {
				opacity: .55;
			}
			.navbar__home-text {
				color: ${navBarButtonActive};
			}
		}
		&__logo-link {
										
			&:hover {
				svg {
					opacity: 1;
				}
				
			}	
			&:focus {	
				.inner-rect, .half-circle  {
					transform: scale(.9);
				}
			}
		}

		&__logo-menu{
			display: flex;
			align-items: center;
		}
		
		&__logo {
			height: 1.5rem;
			overflow: hidden;
			.inner-rect, .half-circle {
				${mainTransition}
				transform: scale(1);
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
				width: 1.5rem;
				height: 1.5rem;
				opacity: 1;
				path {
					
					fill: ${logoBgHoverColor};
				}
				background:transparent;
				border-radius: ${logoBorderRadius};
				${mainTransition}
				&:hover,&:focus {
					opacity: 1;
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
		props.isPortrait
			? `none`
			: `border-bottom: none !important;
	border-top: none !important;`}; 
	
	
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
		&__contact {
		/* ${props =>
			props.navBarRight ? `padding-right: 0!important` : navBarBorder}; 	 */
			margin-left: ${navBarSize};
			
		}
		button {
			border: none !important;
			&:focus {
				border: none !important;
			}
		}
		&__hdappText{
			&::before {
				content:'HerbieDuah';
				${mobile}{
				content:'HD';
					}
				${tablet}{
				content:'Herbie';
				}
			}
			
		}
		&__maximize {
			padding: 0 !important;
			display: flex;
			cursor: pointer;
			.animatecss-container{
				display: flex;
    			align-items: center;
				left: -${navBarSize} !important;
				text-transform: uppercase;
			}
		}
		&__menu-text, &__logo {
			position:relative;
			z-index: 100;	
		}
		&__logo-link.active{
			svg {
				opacity: .55;
			}	
		}
		&__logo-link {
				transform: scale(1);						
			&:hover {
				svg {
					opacity: 1;
				}
			}	
			&:focus {
				transform: scale(.9);
			}
		}

		&__logo-menu{
				display: flex;
				align-items: center;
				flex-direction: row-reverse;
				${props =>
					props.isPortrait
						? `margin-right: 1rem;`
						: `margin-right: ${navBarSize};`}; 
			
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
				opacity: 1;
				transform: scale(.95);
				border: none;
				width: ${navBarSize};
				height: ${navBarSize};
				background: transparent;
				/* border-bottom: ${logoBorderBottom}; */
				border-radius: ${logoBorderRadius};
				margin-top: 2px;
				/* border-right:  ${props =>
					props.navBarComplement ? logoBorderBottom : `none`};  */
				${mainTransition}
				&:hover,&:focus {
					/* background: ${logoBgHoverColor};
					border-bottom: none;
					.inner-rect, .half-circle {
						fill: ${logoInnerFillColorHoverFocus};
						
					} */
					opacity: 1;
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
	&.space-between {
		.react-tabs__tab-list {
			justify-content: "space-between";
		}
	}

	.react-tabs {
		&__tab-list {
			display: flex;
			margin-top: 0;
			padding: 0;
			/* ${marginLRSm} */
			justify-content: ${tabHeadingsJustifyContent};
			width: 100%;
			overflow-x: auto;
			list-style-type: none;
			${hideScrollbar}
			border: 0;
			border-radius: 0;
			max-width: 500px;
			text-transform: uppercase;
			border: ${tabHeadingsBorder};
			height: ${navBarSize};
			align-items: center;
			
		}

		&__tab {
			${mainTransition}
			cursor: pointer;
			margin: 0;
			display: flex;
			align-items: center;
			height: 100%;
			width: 100%;
			justify-content: center;
			border-radius: ${tabHeadingsBorderRadius};
			white-space: nowrap;
			border-right: ${borderThin};
			
			&:last-child {
				/* margin-right: 0; */
				border: 0;
			}
			/* &:first-child {
				border-right: ${borderThin};
			} */
			/* ${tablet} {
				margin: 0 0.6rem;
			}
			${mobile} {
				margin: 0 0.55rem;
			} */
			/* .marginLRSm {
				${marginLRSm}
			} */
			span {
				transform: scale(1);
				${mainTransition};
				/* color: ${tabHeadingsColor};
				${mainTransition}
				border-bottom: 2px solid rgba(0,0,0,0);
				&:focus,
				&:hover {
					color: ${tabHeadingsColorHoverFocus};
					border-bottom: 2px solid ${colorSlightOpacity};
				} */
				/* ${mobile}{
					padding: 0 5px;
				} */
			}
			/* &:focus,&:hover {
				span {
					transform: scale(1);
				}
			} */
			&:focus,&:hover {
				
				span {
					transform: scale(.93);
				}
				/* span {
					border: ${tabHeadingsBorderActive};
					border-bottom: ${tabHeadingsBorderBottomActive};
					color: ${tabHeadingsColorActive};
					&:hover {
						color: ${tabHeadingsColorActive};
						border-bottom: ${tabHeadingsBorderBottomActive};
					}
				} */
			}

			&--selected {
				background-color: ${fontColor};
				span {
					color:  ${fontColorOpposite};
					/* border: ${tabHeadingsBorderActive};
					border-bottom: ${tabHeadingsBorderBottomActive};
					color: ${tabHeadingsColorActive};
					&:hover {
						color: ${tabHeadingsColorActive};
						border-bottom: ${tabHeadingsBorderBottomActive};
					} */
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
		cursor: pointer;
		&__container {
			width: 100%;
			${paddingLRSm}
		}
		&__button {
			${mainTransition}
			position: relative;
			width: 100%;
			padding-bottom: 100%;
			cursor: pointer;
			/* height: 9.5rem; */
			
			/* ${mobile} {
				width: 5rem;
				height: 5rem;
			}
			${tablet} {
				width: 7rem;
				height: 7rem;
			} */
			/* margin: 0 auto; */
			display: block;
			/* border-radius: 50%; */
			cursor: pointer;
			background: ${props =>
				props.isPortrait
					? props.themeValues.gradientPortrait
					: props.themeValues.gradient};
			border: ${borderThin};
			cursor: default;
			&:hover,
			&:focus {
				transform: scale(1.02);
			}
		}
		&__text {
			color: ${props => props.themeValues.borderColor};
			/* width: 9.5rem;
			${mobile} {
				width: 5rem;
			}
			${tablet} {
				width: 7rem;
			} */
			margin-top: auto;
			text-align: left;
			display: block;
			cursor: pointer;
			padding: 0.25rem;
			width: 100%;
			/* margin-bottom: 1rem; */
			&.current {
				color: ${fontColor};
				cursor: default;
			}
		}
		&__overlay {
			${absoluteOverlay}
			display:flex;
			flex-direction: column;
			cursor: pointer;
			/* justify-content: center; */
			/* align-items: center; */
			/* span {
				color: ${fontColor};
			} */
		}
		&__current-text {
			color: ${fontColor};
			display: block;
			text-align: right;
			width: 100%;
			text-transform: uppercase;
			margin-bottom: auto;
			padding: 0.25rem;
		}
	}
`;

export const TransitionTextContainer = styled.li`
	position: relative;
	list-style-type: none;
	margin-bottom: ${navBarSize};
	display: flex;
	padding:0  ${navBarSize};
	.appTransition {
		&__container {
			/* ${mainTransition} */
			/* display: inline-block;
			border-bottom: 2px solid rgba(0, 0, 0, 0); */
			/* cursor: pointer; */
		}
	}

	${mobile} {
		padding: 0;
	}
	button {
		/* color: ${navBarButtonColor}; */
		text-decoration: none;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		display:flex;
		padding:0  ${navBarSize};
		${mobile} {
			padding: 0 .5rem;
			border-left:0;
			border-right: 0;
		}
		span {
			
		}
		height: 3rem;
		
		&.current {
			${mobile} {
			border-left:0;
			border-right: 0;
			}
		}
		&:hover,&:focus {
			text-decoration: none;
			${mobile} {
			border-left:0;
			border-right: 0;
			}
			transform: scale(1);
		}
		
	}

	span.animated {
		animation-duration: ${revealSecs}ms;
	}
	/* span {
		display: inline-block;
	} */
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
			text-align: left;
			${marginTopXLarge}
			display: flex;
			justify-content: center;

		}
	}
	.menu {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		${paddingLRSm}
		ul {
			list-style-type: none;
			padding: 0;
		}
		.react-tabs__tab-list {
		max-width: 500px;
		margin: 0 auto;
		margin-bottom: 2rem;
		${mobile} {
			margin-bottom: .5rem;
		}
		
		${marginTopMed}
		width: 100%;
		}
		.subMenu {
			${marginTopMed}
			margin-top: 0;
			&__item{
				text-align: center;
				margin-top: 0rem;
				margin-bottom: .7rem;
			}
		}
	}
	
	nav {
		height: 37vh;
	}
	.subMenu {
		${marginTopSm}
		ul {
			list-style-type: none;
		}
		&__item {
			/* margin-bottom: 1rem; */
			text-align: center;
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

export const BorderDesktop = styled.div`
	${absoluteOverlay}
	width: calc(100% - ( ${navBarSize} +  ${navBarSize}));
	margin: 0 ${navBarSize};
	border-left: ${borderThin};
	border-right: ${borderThin};
	z-index: 1000;
	pointer-events: none;
`;

export const ScrollDownPortrait = styled.div`
	width: 100%;
	height: 200px;
	position: absolute;
	left: 50%;
	
	top: -60px;
	${mobile} {
		top: 0;
	}
	transform: translate(-50%, 0);
	z-index: 1000;
	&::before {
		display: flex;
		position: absolute;
		left: 50%;
		top: 0;
		${mainTransition}
		content: "${props => (props.dragging ? "RELEASE SLIDER THEN" : "")} SCROLL";
		font-family: ${appfontFamilyTertiary};
		width: 100%;
		justify-content: center;
		color: ${fontColor};
		/* border-radius: 50%; */
		/* width: 30px;
		height: 30px; */
		transform: translate(-50%, 10px) scale(0.5, 0.5);
		/* background: red; */
		animation: ${scrollDownTouch} 3s linear infinite;
	}
`;

const scrollMouseSize = `25vmin`;
export const ScrollDownLandscape = styled.div`
	height: ${scrollMouseSize};
	width: ${scrollMouseSize} * 0.6;
	border-radius: ${scrollMouseSize};
	border: ${scrollMouseSize} / 22 solid ${fontColor};
	position: relative;
	&:before {
		content: "";
		position: absolute;
		left: calc(50% - #{${scrollMouseSize}} / 20);
		top: ${scrollMouseSize} / 5;
		height: ${scrollMouseSize} / 10;
		width: ${scrollMouseSize} / 10;
		background: ${fontColor};
		border-radius: 50%;
		animation: ${scrollDownMouse} 4s infinite;
	}
`;

export const StartUp = styled.div`
	${absoluteOverlay};
	background-color: ${bgColor};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5000;
	padding: 5%;
	text-align: center;

	flex-direction: column;
	.react-reveal {
		width: 100%;
	}
	p {
		margin-bottom: 5vh;
		width: 100%;
		max-width: 500px;
		display: block;
		text-align: center;
	}
	button {
		margin: 0 auto;
	}
	.startUp__skip {
		display: flex;
		justify-content: center;
		max-width: 500px;
		width: 100%;
		padding-top: 3rem;
		text-align: center;
	}
	/* .startup{
	&__text {

	}

} */
`;

export const AccessibilityContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	flex-flow: row-reverse;
	justify-content: right;
	flex-direction: column;

	${paddingLRSm};
	.accessibility {
		&__button-container {
			display: flex;
			flex-direction:column;
			justify-content: right;
			button {
				margin-left: auto;
				height: ${navBarSize};
				display: flex;
				padding-top: 0;
				padding-bottom: 0;
				align-items: center;
			}
		}
		&__text {
			width: 100%;
			text-align: right;
			display: block;
			margin-left: auto;
		}
		/* &__wrapper {
			padding: 0 ${navBarSize};
		} */
	}

	margin-bottom: ${navBarSize};
	${mobile} {
		margin-bottom: 1rem;
	}
	${tablet}{
		margin-bottom: 5.5rem;
	}
`;
