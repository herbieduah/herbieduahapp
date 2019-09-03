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
	cMarginTop
} from "./StyleHelpers";
import {
	navBarBorder,
	CTAColor,
	borderThin,
	fontColor
} from "./Themes/ThemeVariables";

export const ContentContainer = styled.section`
	width: 100%;
	height: 100vh;
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

	.LazyLoad {
		width: 100%;
	}
	img {
		max-width: 100%;
  		height: auto;
	}
	figure {
		margin: 0;
	}
	span.alpha {
		background:blue;
		color: white;
		font-weight:bold;
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
			margin-bottom: ${props => (props.isPortrait ? `70vh` : `0`)};
		}
	}
	.less {
		${mainTransition}
		width:  100%;
		height: ${props => (props.showLess && !props.isPortrait ? `100%` : `100%`)};
		position: relative;
		z-index: 10;
		${props => (props.isPortrait ? `margin-top: .5rem` : ``)};
		max-width: 740px;
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
			/* ${props => (props.isPortrait ? `padding-top: 3.5rem;` : ``)}; */
		}
		${mobile} {
			width: 100%;
			height: 100%;
		}
		
		&__container {
			padding-top: ${props => (props.isPortrait ? `0` : `${navBarSize}`)};
		}
		&__header {
			height: 6vh;
			margin-bottom: 10vh;
			${mobile} {
				height: 4vh;
				margin-bottom: 4vh;
			}
		}
		&__main-text {
			height: 20vh;
			max-width: 550px;
			display: block;
			${props => (props.isPortrait ? `${cMarginBottomMed}` : `margin-bottom: 35vh`)};
		}
		&__drag {
			text-transform: uppercase;
			
			display:block;
			padding-bottom:${props => (props.isPortrait ? `38vh;` : `91vh;`)};
			${mobile}{
				font-size: 14px;
			}
		}
				
	}

	.c-margin-bottom,.cmb {

		${cMarginBottom} 
	} 
	.c-padding-bottom,.cPaddingBottom {
		${cPaddingBottom}
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
	
	.c-margin-0 {
		margin: 0;
	}

	ul.themeCircle {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto;
		padding: 0;
	}
	ul.appTransition {
		margin: 0;
		padding: 0;	
		button {
			padding:0;
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
`;

export default ContentContainer;
