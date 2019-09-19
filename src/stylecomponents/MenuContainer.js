import styled from "styled-components";
import {
	mobile,
	mainTransition,
	hideScrollbar,
	// mobileSliderOnBottom,
	slightBoxShadowAbove,
	contentMenuMargin,
	// contentMenuMargin,
	contentMenuMarginRight,
	// stupidNegativeMargin,
	tablet,
	// contentMenuMarginRight,
	paddingLR,
	navBarSize
} from "./StyleHelpers";
import { fontColor, CTAColor } from "./Themes/ThemeVariables";
import { isIOS } from "react-device-detect";
// import { sliderMobileWidth } from "../helpers";

// ${props =>
// 	props.isShowingMore ? `border-top: 1px solid rgba(255,255,255,.5)` : ``};
const MenuContainer = styled.aside`
	/* margin-top: 10px !important; */
	${hideScrollbar}
	width: 100%;
	/* max-width: 500px; */
	height: 100%;
	/* ${props =>
		props.isShowingMore && props.isPortrait ? `position:absolute;` : ``}; */
	overflow: auto;
	/* top:0px; */
	${tablet} {
		top:0px;
	}
	${props =>
		props.isPortrait
			? `padding: 0 ${navBarSize};`
			: `padding: 0 ${navBarSize} 0 0;`};
	
	/* border-top: 1px solid ${CTAColor}; */
	display: flex;
	width: 100%;
	z-index: 10;
	/* ${props =>
		props.navBarRight ? contentMenuMarginRight : contentMenuMargin}; */
	${props =>
		props.navBarRight && props.isPortrait
			? `padding-right:${navBarSize}; padding-left:0;`
			: `padding-right: 0;`}
	
	${mainTransition}
	${props =>
		props.isPortrait ? `margin: 0 0 0;` : `margin: 0 ${navBarSize} 0 0 ;`};

	/* margin-top: 0;
	margin-left: 0; */
	${tablet} {
		${props =>
			props.isPortrait
				? `max-width: 740px;
		width: 100%; margin: 0 auto;`
				: ``};
	}
	/* ${props =>
		isIOS && props.isPortrait ? slightBoxShadowAbove : `box-shadow: none`}; */
	.react-tabs {
		/* padding: 1rem 0; */
		${paddingLR}
		&__tab-list {
			${props => (props.isPortrait ? `margin-right: auto` : `margin-left: auto`)};
			max-width: 500px;
			${props => (props.isPortrait ? `margin-top: 50px;` : ``)};
			${paddingLR}
			${tablet} {
				max-width: 600px;
			${props =>
				props.isPortrait
					? `height: auto;margin-top: 6vh; margin-bottom:1rem;`
					: ``};
			}
			height: 6vh;
			margin-bottom: 10vh;
			${mobile} {
				height: 3vh;
				margin-bottom: .4rem;
			}
		}
		${hideScrollbar}
	}
	
	${mobile} {
		max-width: 100%;
		width: 100%;
		${props => (props.isShowingMore ? `display: block;` : `display: flex;`)};
		
	}

	.menu {
		&__less {
			
			height: ${props => (props.isPortrait ? `auto` : `100vh`)};
		}
		&__less-container {
			padding-top: ${props => (props.isPortrait ? `0` : `${navBarSize}`)};
		}
		&__more {
			padding: 1rem 0;
			margin-top: 1.3rem;
			.subMenu {
			${props => (props.isPortrait ? `overflow-x: auto;` : ``)};
			${props => (props.isPortrait ? `flex-direction: row;` : ``)};
			}
		}
	}


	justify-content: right;
	flex-direction: column;
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
		color: ${fontColor};
		cursor: pointer;
	}
	.margin-top-0 {
		margin-top: 0 !important;
	}
	.subMenu {
			width: 100%;
			height:100%;
			${hideScrollbar}
			${paddingLR}
			flex-direction: column;
			${props => (props.isPortrait ? `text-align: left;` : `text-align: right;`)};
			
		
			/* ${mobile} {
				overflow-x: auto;
				${hideScrollbar};
				flex-direction: row;
			
			} */
			display: flex;
			margin: 0;
			${props => (props.isPortrait ? `margin-left: auto;` : `margin-right: auto;`)};
			

		&__text {
			${mainTransition}
			text-align: ${props => (props.isPortrait ? `left;` : `right;`)};
			margin-bottom: 0;
			${paddingLR}
			margin-top: 2rem;
			${tablet}{
				
				${props => (props.isPortrait ? `margin-top: .5rem;` : ``)};
			}
			width: 100%;
			display: block;
			${mobile}{
				margin-top: 0;
			}
		}
		
		&__item {
			margin: .4rem 0 .5rem;
			${tablet}{
				&:last-child {
					${props => (props.isPortrait ? `padding-right:4rem` : ``)};
				}
				${props => (props.isPortrait ? `margin: 0 1.4rem .3rem 0;` : ``)};
				
				padding: 0;
			}	
			${mobile} {
				margin: .2rem 0 .5rem;
				${props =>
					props.isShowingMore ? `margin: 0 0 .5rem` : `margin: .2rem 0 .5rem`};
				margin-right: 1.5rem;
				a {
					
					/* ${tablet}{
						${props => (props.isPortrait ? `font-size: 1.7em` : ``)};
					}					 */
					white-space: nowrap;		
				}
				&:last-child {
					${props => (props.isPortrait ? `padding-right:4rem` : ``)};
				}
			}
			${props => (props.isPortrait ? `white-space: nowrap;` : ``)};
			${props => (props.isPortrait ? `margin-right: 1rem;` : `margin-left: 1rem;`)};
		}
	}
	.accessibility {
		position:absolute;
		bottom: 0;
		width: 100%;
		display:flex;
		justify-content: right;
    	button {
			margin-left: auto;
		}
	}
	
	.alert-enter {
	opacity: 0;
	transform: scale(0.9);
	}
	.alert-enter-active {
	opacity: 1;
	transform: translateX(0);
	transition: opacity 300ms, transform 300ms;
	}
	.alert-exit {
	opacity: 1;
	}
	.alert-exit-active  { 
	opacity: 0;
	transform: scale(0.9);
	transition: opacity 300ms, transform 300ms;
	}

	.offset {
		width:100%;
		margin-top: ${props => (props.isPortrait ? navBarSize : `5vh;`)};
	}

`;

export default MenuContainer;
