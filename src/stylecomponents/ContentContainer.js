import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	contentMenuPadding,
	tablet,
	navBarSize,
	contentMenuPaddingRight,
	paddingLR,
	marginLR,
	paddingTB,
	paddingLRLarge,
	paddingLRMed,
	marginLRLarge,
	marginLRMed,
	slightBoxShadowBelow
} from "./StyleHelpers";
import { CTAColor } from "./Themes/ThemeVariables";

export const ContentContainer = styled.article`
	width: 100%;
	height: 100vh;
	${props => (props.isPortrait ? mobileSliderOnTop : ``)};
	${hideScrollbar};
	overflow: auto;
	${props => (props.navBarRight ? contentMenuPaddingRight : contentMenuPadding)};

	
	padding-bottom: 40vh;
	${props => (props.minimalMode ? `margin:0 !important` : ``)};
	${props => (props.minimalMode ? `padding:2.5rem 0 !important` : ``)};
	${props => (props.showMore ? `` : `padding-top: 0 !important;`)};
	padding-top: 0 !important;
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
	}
	figure {
		margin: 0;
	}
	span.alpha {
		background:red;
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
		&__header {
			h1 {
				${mainTransition}
				user-select: none;
				cursor: pointer;
			}
		}
		&__less {
			width:  100%;
			height: ${props => (props.showLess && !props.isPortrait ? `100vh` : `100%`)};
			
			${props => (props.isPortrait ? `margin-top: ${navBarSize}` : ``)};
			max-width:  ${props => (props.showLess ? `500px` : `100%`)};
			/* margin: 0 auto; */
			/* p {
				${mainTransition}
				font-size: ${props => (props.showLess ? `1.5em` : `.9em`)};
				margin: 0 auto;
			} */
			${tablet} {
				max-width:  ${props =>
					props.showLess && !props.isPortrait ? `400px` : `100%`};
					height: 100%;
			}
			${mobile} {
				width: 100%;
				height: 100%;
			}
		}
		&__less-container {
			padding-top: ${props => (props.isPortrait ? `0` : `33vh`)};
		}
		&__more {
			${mainTransition}
			padding: 0 2rem;
			margin-bottom: ${props => (props.isPortrait ? `70vh` : `0`)};
		}		
	}

	.c-margin-bottom {
		margin-bottom: 3rem;
		${mobile} {
			margin-bottom: 2.5rem;
		}
	}
	.c-padding-bottom {
		padding-bottom: 3rem !important;
		${mobile} {
			padding-bottom: 2.5rem!important;
		}
	}
	.c-padding-bottom-med {
		padding-bottom: 2rem;
		${mobile} {
			padding-bottom: 1.5rem;
		}
	}
	.c-margin-bottom-med {
		margin-bottom: 1.5rem;
		${mobile} {
			margin-bottom: 1rem;
		}
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
		margin-top: 3.5rem;
		${mobile} {
			margin-top: 3rem;
		}
	}
	.emoji {
		vertical-align: baseline;
	}
	.c-border {
		border: 1px solid ${CTAColor};
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
`;

export default ContentContainer;
