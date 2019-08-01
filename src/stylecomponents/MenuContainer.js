import styled from "styled-components";
import {
	mobile,
	fontColor,
	mainTransition,
	hideScrollbar,
	mobileSliderOnBottom,
	slightBoxShadowAbove,
	contentMenuMargin,
	// contentMenuMargin,
	contentMenuMarginRight,
	stupidNegativeMargin,
	tablet,
	// contentMenuMarginRight,
	paddingLR,
	navBarSize
} from "./StyleHelpers";
import { CTAColor, navBarBorder } from "./Themes/ThemeVariables";
import { sliderMobileWidth } from "../helpers";

// ${props =>
// 	props.isShowingMore ? `border-top: 1px solid rgba(255,255,255,.5)` : ``};
const MenuContainer = styled.aside`
	${hideScrollbar};
	width: 100%;
	/* max-width: 500px; */
	height: 100%;
	padding-top: ${navBarSize};
	${props =>
		props.isShowingMore && props.isPortrait ? `position:absolute;` : ``};
	overflow: auto;
	top:-40px;
	${tablet} {
		top:0px;
	}
	${props => (props.switchSides ? `margin-left: auto` : `margin-right: auto`)};
	/* border-top: 1px solid ${CTAColor}; */
	display: flex;
	width: 100%;
	z-index: 10;
	${props => (props.navBarRight ? contentMenuMarginRight : contentMenuMargin)};
	${props => (props.navBarRight ? `padding-right:${navBarSize}` : ``)};
	${mainTransition}
	margin-top: 0;
	border-right :${props => (props.isPortrait ? `` : navBarBorder)};

	${props =>
		props.isShowingMore && props.isPortrait
			? slightBoxShadowAbove
			: `box-shadow: none`};
	.react-tabs {
		/* padding: 1rem 0; */
		${paddingLR}
		&__tab-list {
			${props => (props.isPortrait ? `margin-right: auto` : `margin-left: auto`)};
			max-width: 500px;
			${props => (props.isPortrait ? `margin-top: 4rem;` : ``)};
			${paddingLR}
			text-transform:uppercase;
		}
	}
	
	${mobile} {
		
		width: 100%;
		${props => (props.isShowingMore ? `display: block;` : `display: flex;`)};
		
	}
	.menu__more {
		padding: 1rem 0;
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
	
	.subMenu {
			width: 100%;
			height:100%;
			
			${paddingLR}
			flex-direction: column;
			${props => (props.isPortrait ? `text-align: left;` : `text-align: right;`)};
			${props => (props.isPortrait ? `overflow-x: auto;` : ``)};
			${props => (props.isPortrait ? `${hideScrollbar};` : ``)};
			${props => (props.isPortrait ? `flex-direction: row;` : ``)};
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
			width: 100%;
			opacity: 0.7;
			display: block;
			${mobile}{
				margin-top: 0;
			}
		}
		
		&__item {
			margin: .4rem 0 1rem;
			${tablet}{
				margin-bottom: 0rem;
			}	
			${mobile} {
				margin: .2rem 0 .5rem;
				${props =>
					props.isShowingMore ? `margin: 0 0 .5rem` : `margin: .2rem 0 .5rem`};
				margin-right: 1.5rem;
				a {
					${tablet}{
						${props => (props.isPortrait ? `font-size: 1.7em` : ``)};
					}					
					white-space: nowrap;		
				}
			}
			${props => (props.isPortrait ? `white-space: nowrap;` : ``)};
			${props => (props.isPortrait ? `margin-right: 1rem;` : `margin-left: 1rem;`)};
		}
		a {
			${tablet}{
				${props => (props.isPortrait ? `font-size: 1.7em` : ``)};
			}		
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
		margin-top: ${props => (props.isPortrait ? `20vh;` : `40vh;`)};
	}

`;

export default MenuContainer;
