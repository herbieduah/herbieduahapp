import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	contentMenuPadding,
	tablet,
	// navBarSize,
	contentMenuPaddingRight,
	paddingLR,
	cPaddingTopSm,
	marginLR,
	paddingTB,
	paddingLRLarge,
	paddingLRMed,
	marginLRLarge,
	marginLRMed,
	slightBoxShadowBelow,
	userSelectNone,
	cMarginBottom,
	cPaddingBottom,
	cPaddingBottomMed,
	cMarginBottomMed,
	cMarginTopSm,
	cMarginBottomSm,
	cPaddingBottomSm,
	navBarSize,
	cMarginTop,
	breather,
	breatherBottom,
	// cPaddingTop,
	cPaddingTopMed,
	paddingLRSm,
	absoluteOverlay,
	crossOut
} from "./StyleHelpers";
import {
	navBarBorder,
	CTAColor,
	borderThin,
	fontColor,
	bgColorContent
} from "./Themes/ThemeVariables";

export const ContentContainer = styled.section`
	width: 100%;
	height: 100vh;
	/* position: relative !important; */
	${mainTransition}
	${props => (props.isPortrait ? mobileSliderOnTop : ``)};
	${hideScrollbar};
	overflow: auto;
	${props => (props.navBarRight ? contentMenuPaddingRight : contentMenuPadding)};
	padding-bottom: 40vh;
	${props => (props.minimalMode ? `margin:0 !important` : ``)};
	${props => (props.minimalMode ? `padding:2.5rem 0 !important` : ``)};
	${props => (props.showMore ? `` : `padding-top: 0 !important;`)};
	padding-top: 0 !important;
	/* transform: perspective(300px) rotateX(15deg);  */
	.less {
		${mainTransition}
		width:  100%;
		height: ${props => (props.showLess && !props.isPortrait ? `100%` : `100%`)};
		position: fixed;
		z-index: 10;
		${props =>
			props.isPortrait ? `margin-top: .5rem` : `margin-top: ${navBarSize}`};
		max-width: 500px;
		${tablet} {
			${props => (props.isPortrait ? `height: 15vh` : `max-width:350px;`)};		
		}
		/* ${props =>
			props.navBarRight ? contentMenuPaddingRight : contentMenuPadding}; */
		/* max-width:  ${props => (props.showLess ? `500px` : `100%`)}; */
		/* margin: 0 auto; */
		/* p {
			${mainTransition}
			font-size: ${props => (props.showLess ? `1.5em` : `.9em`)};
			margin: 0 auto;
		} */
		${tablet} {
			/* max-width:  ${props =>
				props.showLess && !props.isPortrait ? `400px` : `100%`}; */
			width: 100%;
			height: 100%;
			${props => (props.isPortrait ? `padding-left: 0; padding:right: 0` : ``)};
			.paddingLR,.padding-left-right {
				${props => (props.isPortrait ? `padding-left: 0; padding:right: 0` : ``)};
			}
		}
		${mobile} {
			width: 100%;
			height: 100%;
			padding:0;
			/* ${props =>
				props.navBarRight
					? `padding-right: ${navBarSize}`
					: `padding-left: ${navBarSize}`}; */
		}
		
		&__container {
			padding-top: ${props => (props.isPortrait ? `0` : `${navBarSize}`)};
			display: none;
		}
		&__header {
			height: 6vh;
			margin-bottom: 10vh;
			${mobile} {
				height: 4vh;
				margin-bottom: 4vh;
			}
			${tablet} {
				${props => (props.isPortrait ? `margin-bottom:4vh;` : ``)};		
			}
		}
		&__main-text {
			height: 20vh;
			max-width: 500px;
			display: block;
			
			${props => (props.isPortrait ? `${cMarginBottomMed}` : `margin-bottom: 9.5vh`)};
		}
		&__drag {
			text-transform: uppercase;
			${props =>
				props.isPortrait
					? ``
					: `
			position: fixed;
			width: 100%;
			height: 100vh;
			displax: flex;
			align-items: center;
			pointer-events: none;
			`};
			display:block;
		}
		
	}
			
	.LazyLoad {
		width: 100%;
	}

	img,video {
		max-width: 100%;
  		height: auto;
	}
	video {
		pointer-events: none;
	}
	figure {
		margin: 0;
	}
	/* .less-more {
		position:absolute;
	} */
	/* .less,.more {
		${absoluteOverlay};
	} */
	span.alpha {
		background:blue;
		color: white;
		font-weight:bold;
	}
	.text-cap {
		text-transform:capitalize;
	}
	margin-top: 0;
	.container {
			max-width: 740px;
			width: 100%;
			${props => (props.fullScreen ? `margin: 0 auto` : ``)};
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

	.c-experience {
		${marginLR};
		${cPaddingTopSm};	
		
		border-bottom: ${borderThin};
	}
	.c-no-wrap {
		white-space: nowrap;
	}

	.cPaddingBottomSm, .c-padding-bottom-small{
		${cPaddingBottomSm}
	}
	.cMarginBottomSm, .c-margin-bottom-small{
		${cMarginBottomSm}

	}

	li {
		color: ${fontColor};
		${cMarginTopSm};
	}

	.flex-container {
		display: flex;
		flex-direction: row;
		${hideScrollbar};
		.react-reveal {
			img,video {
				height: 23vh!important;
				width: auto !important;
				margin: 0 .5rem !important; 
			}
		}
	}
	.content {
		${mainTransition}
		&__header {
			h1 {
				${mainTransition}
				${userSelectNone}
				cursor: pointer;
				&:hover {
					color: ${CTAColor};
				}
			}
		}
		&__more {
			${mainTransition}
			padding: 0 2rem;
			margin-bottom: ${props => (props.isPortrait ? `55vh` : `0`)};
		}
	}
		
	}

	.c-margin-bottom,.cmb {

		${cMarginBottom} 
	} 
	.c-padding-bottom,.cPaddingBottom {
		${cPaddingBottom}
	}
	.breather {
		${breather}
	}
	.breather-bottom {
		${breatherBottom}
	}
	.c-padding-bottom-med, .cPaddingBottomMed {
		${cPaddingBottomMed}
	}
	.c-margin-bottom-med {
		${mobile} {
			margin-bottom: 1rem;
		}
		${cMarginBottomMed}
	}
	.padding-left-right, .paddingLR {
		${paddingLR}
	}
	.paddingLRMed {
		${paddingLRMed}
	}
	.paddingLRSm {
		${paddingLRSm}
	}
	.paddingLRLarge {
		${paddingLRLarge}
	}
	.marginLRMed {
		${marginLRMed}
	}
	
	.marginLRLarge {
		${marginLRLarge}
	}
	.padding-top-bottom, .paddingTB {
		${paddingTB}
	}
	.margin-left-right, .marginLR {
		${marginLR}
	}
	.c-margin-top {
		${cMarginTop}
	}
	.c-margin-top-small{
		${cMarginTopSm}
	}
	.c-margin-top-large {
		margin-top: 4.5rem;
		${mobile} {
			margin-top: 4rem;
		}
	}
	.emoji {
		vertical-align: baseline;
	}
	.c-border {
		border: ${navBarBorder};
		 ${props => (props.isPortrait ? `` : `${paddingTB}`)};
		 ${props => (props.isPortrait ? `` : `${marginLR}`)};
		 ${props => (props.isPortrait ? `border: none !important;` : ``)};

	}
	.c-margin-top-med {
		margin-top: 2.5rem;
		${mobile} {
			margin-top: 2rem;
		}
	}
	.stupidButtonHeight {
		position:relative;
		/* height: 3rem; */
			/* ${mobile} {
				height: 2rem;
			} */
		margin-bottom: 4rem;
		${mobile} {
			margin-bottom: 5rem;
		}
	}
	s {
		position:relative;
		text-decoration: none;
		&::before{
			content: '';
			border-bottom: 2px solid ${fontColor};
			${crossOut};
		}
	}
	
	.c-margin-0 {
		margin: 0;
	}

	ul.themeCircle {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto;
		${cPaddingBottomMed}
		${paddingLR}
		/* background-color: ${bgColorContent}; */
	}
	ul.appTransition {
		margin: 0;
		padding: 0;	
		button {
			padding:0;
		}
	}

	.c-category {
		${breather};
		${paddingLR}
		ul {
			list-style-type: none;
			margin:0;
			padding: 0;
		}
	}
	.offset {
		width:100%;
		height: 30vh;
		display:block;
	}
	.less-image {
		padding:0 20%;
	}

	.c-disable {
		${mainTransition};
		opacity: .4;
		pointer-events: none;
	}
	.c-mockup {
		${slightBoxShadowBelow};
		margin-bottom: 7px;
		${mobile} {
			margin-bottom: 5px;
		}
	}
	.c-interact {
		margin-top: 2rem !important;
			width: 100%;
			/* ${props => (props.isPortrait ? `text-align: center` : ``)};
		display: block; */
		${mobile} {
			margin-top: 1.5rem !important;
		}
	}
	.c-submenu {
		${paddingLR};
		ul {
			list-style-type:none;
		}
		
		margin-top: 3.5rem;
		${mobile} {
			margin-top: 3rem;
		}
		.subMenu {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 0;
		${mobile} {
			display:block;
		}
		
		&__item {
			
			list-style-type: none;
			margin-right: 1.5rem;
			
			white-space: wrap;
			${mobile} {
				margin-right: 1rem;
				margin-bottom: .7rem;
			}
		}
		&__text {
			margin-top: 1rem;
			${mobile} {
				margin-top: 2.5rem;
			}
		}
	}
	
	}
	.c-work-info{
		${marginLR}
		${cMarginBottomMed}
		padding-top: .5rem;
		padding: .5rem 0;
		strong {
			display: contents;
		}
		.react-reveal,li span {
			margin:0;
			padding:0;
		}
		li {
			list-style-type: none;
			margin: 0;
		}
		ul {
			margin: 0;
			padding:0;
		}
		border-top: ${borderThin};
		border-bottom: ${borderThin};
	}

	.react-tabs {
		&__tab-list {
			max-width: 500px;
			${paddingLR}
		}
	}
`;

export default ContentContainer;
