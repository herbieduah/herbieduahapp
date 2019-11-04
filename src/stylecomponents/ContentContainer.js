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
	paddingLRSm,
	paddingTopSm,
	marginLRSm,
	paddingTBSm,
	slightBoxShadowBelow,
	userSelectNone,
	paddingBottomMed,
	marginBottomMed,
	marginTopSm,
	navBarSize,
	marginTopXLarge,
	// cPaddingTop,
	// cPaddingTopMed,
	// paddingLRSm,
	// absoluteOverlay,
	crossOut,
	marginBottomLarge,
	marginTopLarge,
	marginTopMed,
	marginBottomSm,
	paddingLRMed,
	mobileSm,
	containerLargePx
} from "./StyleHelpers";
import {
	navBarBorder,
	CTAColor,
	borderThin,
	fontColor,
	colorSlightOpacity
} from "./Themes/ThemeVariables";

export const ContentContainer = styled.section`
	width: 100%;
	height: 100vh;
	/* position: relative !important; */
	${mainTransition}
	${props => (props.isPortrait ? mobileSliderOnTop : ``)};
	overflow: auto;
	${props => (props.navBarRight ? contentMenuPaddingRight : contentMenuPadding)};
	padding-bottom: 40vh;
	${props => (props.minimalMode ? `margin:0 !important` : ``)};
	${props => (props.minimalMode ? `padding:2.5rem 0 !important` : ``)};
	${props => (props.showMore ? `` : `padding-top: 0 !important;`)};
	padding-top: 0 !important;
	/* transform: perspective(300px) rotateX(15deg);  */
	
	.less {
		position: fixed;
		h1,
		p {
			&.paddingLRSm {
				${props => (props.isPortrait ? `` : `padding-right: 0; padding-left: 0;`)};
			}
		}
		${mainTransition}
		width:  100%;
		height: ${props => (props.showLess && !props.isPortrait ? `100%` : `100%`)};

		z-index: 10;
		${props => (props.isPortrait ? `margin-top: 1rem` : `margin-top:0`)};
		max-width: 500px;
		${tablet} {
			margin:0 auto;
			${props =>
				props.isPortrait ? `display:flex;padding-right:${navBarSize}` : ``};
			width: 100%;
			height: 100%;
			${props =>
				props.isPortrait
					? `max-width: 100%;
		width: 100vw; margin: 0 auto; `
					: `max-width:350px;`};
			${props => (props.isPortrait ? `padding-left: 0;` : ``)};
			
			.paddingLRSm {
				${props => (props.isPortrait ? `padding-left: 0; padding-right: 0` : ``)};
			}
		}

		&__container {
			padding-top: ${props => (props.isPortrait ? `0` : `${navBarSize}`)};
			display: none;
		}
		&__header {
			
		letter-spacing: 2px;
			height: 6vh;
			margin-bottom: 10vh;
			${mobile} {
				height: auto;
				${marginBottomLarge};
				text-align: center;
				hyphens: auto;
			}
			${mobileSm} {
				padding-left:0 !important;
				padding-right: 0 !important;
			}
			${tablet} {
				${props => (props.isPortrait ? `margin-bottom:4vh;` : ``)};
				${props => (props.isPortrait ? `text-align: center;` : ``)};
			}
		}
		&__main-text {
			height: 20vh;
			max-width: 500px;
			display: block;
			${props => (props.isPortrait ? `${marginBottomMed}` : `margin-bottom: 9.5vh`)};
			${mobile}{
				height: auto;
				${marginBottomLarge};
				text-align:center;	
			}	
			${tablet} {
				${props =>
					props.isPortrait
						? `text-align: center;height: auto;text-align:center;${marginBottomMed}	`
						: ``};
			}
		}
		
		&__drag {
			${props =>
				props.isPortrait
					? ``
					: `
			position: fixed;
			width: 100%;
			height: 100vh;
			displax: flex;
			padding-left: 0;
			align-items: center;
			pointer-events: none;
			`};
			display: block;
			${mobile}{
				text-align:center;
				justify-content: center;	
			}

		}
		.c-instructions {
			${mobile}{
				justify-content: center;	
			}
			${tablet} {
				${props => (props.isPortrait ? `display: flex;justify-content:center;	` : ``)};
			}
		}
		
		&__wrapper {
			${mainTransition}
			${props => (props.navBarRight ? contentMenuPaddingRight : contentMenuPadding)};
			
			${mobile}{
			${props => (props.dragging ? `padding-left: 0; padding-right: 0;` : ``)};
			padding-top: 0;
			padding-bottom: 0;
			}
			${tablet} {
				${props => (props.isPortrait ? `margin: 0 auto;	` : ``)};
			}
		}
		${mobile} {
			padding-bottom: 0;
			
			width: 100%;
			height: 100%;
		}
	}

	&::-webkit-scrollbar-track {
		background-color:${colorSlightOpacity};
	}

	&::-webkit-scrollbar {
		width: 20px;
		${mobile}{
			width: 10px;
		}
	}

	&::-webkit-scrollbar-thumb {
		background-color:${fontColor};
	}
	${props => (props.accessible ? `` : hideScrollbar)};

	.LazyLoad {
		width: 100%;
	}

	img,
	video {
		max-width: 100%;
		height: auto;
	}
	figure {
		margin: 0;
	}
	.all-caps {
		text-transform: uppercase;
	}
	span.alpha {
		background: blue;
		color: white;
		font-weight: bold;
	}
	.text-cap {
		text-transform: capitalize;
	}
	margin-top: 0;
	.container {
		max-width: 740px;
		width: 100%;
		${props => (props.fullScreen ? `margin: 0 auto` : ``)};
	}
	.container-large {
		max-width: ${containerLargePx};
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
		${marginLRSm};
		${paddingTopSm};
		border-bottom: ${borderThin};
	}
	.c-no-wrap {
		white-space: nowrap;
	}

	li {
		color: ${fontColor};
		${marginTopSm};
	}

	.flex-container {
		display: flex;
		flex-direction: row;
		${hideScrollbar};
		.react-reveal {
			img,
			video {
				height: 23vh !important;
				width: auto !important;
				margin: 0 0.5rem !important;
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

	.emoji {
		vertical-align: baseline;
	}
	.c-border {
		border: ${navBarBorder};
		${props => (props.isPortrait ? `` : `${paddingTBSm}`)};
		${props => (props.isPortrait ? `` : `${marginLRSm}`)};
		${props => (props.isPortrait ? `border: none !important;` : ``)};
	}

	s {
		position: relative;
		text-decoration: none;
		&::before {
			content: "";
			border-bottom: 2px solid ${fontColor};
			${crossOut};
		}
	}

	ul.themeCircle {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto;
		${paddingBottomMed}
		padding-left: 0;
		padding-right: 0;
		li {
			margin-top: 0;
			margin-bottom: 1rem;
		}
		/* ${paddingLRSm} */
	}
	ul.appTransition {
		margin: 0;
		padding: 0;
		/* button {
			padding: 0;
		} */
	}

	.c-category {
		${marginTopXLarge};
		${paddingLRSm}
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		height: 30vh;
		.react-tabs__tab-list {
		max-width: 500px;
		margin: 0 auto;
		margin-bottom: 1rem;
		${marginTopMed}
		width: 100%;
		}
		.subMenu {
			${marginTopMed}
			&__item{
				text-align: center;
			}
		}
		
	}
	.offset {
		width: 100%;
		height: 30vh;
		display: block;
	}
	.less-image {
		padding: 0 20%;
	}

	.c-disable {
		${mainTransition};
		opacity: 0.4;
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
		${mobile} {
			margin-top: 1.5rem !important;
		}
	}
	.c-instructions {
		letter-spacing: .5px;
		text-transform: uppercase;
		${marginBottomMed}
	}
	.c-submenu {
		${paddingLRSm};
		ul {
			list-style-type: none;
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
				display: block;
			}

			&__item {
				list-style-type: none;
				margin-right: 1.5rem;

				white-space: wrap;
				${mobile} {
					margin-right: 1rem;
					margin-bottom: 0.7rem;
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
	.c-work-info {
		margin: 0 auto;
		${marginBottomSm}
		padding-top: .5rem;
		padding: 0.5rem 0;
		display: flex;
		flex-direction:column;
		justify-content: center;
	 	width: 100%;
		strong {
			display: contents;
		}
		.react-reveal,
		li span {
			margin: 0;
			padding: 0;
		}
		li {
			/* ${paddingLRSm} */
			list-style-type: none;
			padding-bottom: .75rem;
			${mobile} {
				margin: 0;
			}
			display: flex;
			margin: 0 auto;
			text-align: center;
			${marginLRSm} 
			/* ${paddingLRSm} */
		}
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		
		/* border-top: ${borderThin};  */
		
	}
	.c-pun {
		height: 2.5rem;
	}
	.c-photos {
		list-style-type: none;
		margin: 0;
		padding: 0;
		${marginTopLarge}
		display:flex;

		flex-direction: column;
		li:nth-of-type(even){ 
			.react-reveal{
				margin-left: auto;
			}
		}

		.react-reveal {
			max-width: 740px;
			padding-left: 7%;
			padding-right: 7%;
			${mobile}{
				padding-left: 0%;
				padding-right: 0%;	
			}
			${tablet}{
				padding-left: 0%;
				padding-right: 0%;	
			}
		}
			/* ${paddingLRSm} */
		
		li {
			list-style-type: none;
			margin: 0;
			padding: 0;
			display: flex;
			width: 100%;
		}			
	}

	.c-zigzag {
		${marginTopMed}
		${marginBottomMed}
		display:flex;
		flex-direction: column;
		${props =>
			props.minimalMode
				? `padding-left: ${navBarSize};
		padding-right: ${navBarSize};`
				: ``};
		
		${mobile} {
			padding-left: 0;
			padding-right: 0;
		}
		&:nth-of-type(odd){ 
			.c-zigzag__content {
				margin-left: auto;
			}
		}
		&__content {
			max-width: 740px;
		}
			/* ${paddingLRSm} */		
	}
	.react-tabs__tab-list {
		max-width: 500px;
		margin: 0 auto;
		width: 100%;
		/* margin: 0 auto; */
		${marginBottomMed}
	}
`;

export default ContentContainer;
