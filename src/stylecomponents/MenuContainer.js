import styled from "styled-components";
import {
	mobile,
	fontColor,
	mainTransition,
	hideScrollbar,
	mobileSliderOnBottom,
	slightBoxShadowAbove,
	navBarSize,
	contentMenuPadding,
	stupidNegativeMargin
} from "./StyleHelpers";
import { rgba } from "polished";
import { sliderMobileWidth } from "../helpers";

// ${props =>
// 	props.isShowingMore ? `border-top: 1px solid rgba(255,255,255,.5)` : ``};
const MenuContainer = styled.aside`
  
	${hideScrollbar};
	width: 100%;
	/* max-width: 500px; */
	height: auto;
	overflow: auto;
	margin-left: auto;
	padding: 4rem 2rem;
	display: flex;
	width: 100%;
	${contentMenuPadding}
	${mainTransition}
	${props => (props.isMobile ? mobileSliderOnBottom : ``)};
	.react-tabs {
		padding: 1rem 0;
		
		&__tab-list {
			${props => (props.isMobile ? `margin-right: auto;` : `margin-left: auto`)};
			max-width: 500px;
			padding-right: 1rem;
			${props => (props.isMobile ? `margin-top: 4rem;` : ``)};
		}
	}
	
	${mobile} {
		${props => (props.isShowingMore ? slightBoxShadowAbove : ``)};
		width: 100%;
		${props => (props.isShowingMore ? `display: block;` : `display: flex;`)};
		margin-top: ${stupidNegativeMargin};
	}
	.menu__more {
		padding: 1rem 0;
	}
		
	
	
	
	justify-content: right;
	flex-direction: column;
	/* ${props => (props.isMobile ? `margin-top: 1rem` : ``)}; */
	
	

	
	/* align-items: ${props => (props.isMobile ? `initial` : `center`)}; */
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
		color: ${fontColor};
		cursor: pointer;
	}
	/* button {
		border: 0;
		padding: 0;
		margin: 0.1rem 0;
		background: none;
		color: ${fontColor};
		cursor: pointer;
	} */

			
	.subMenu {
			width: 100%;
			flex-direction: column;
			${props => (props.isMobile ? `text-align: left;` : `text-align: right;`)};
			${mobile} {
				overflow-x: auto;
				${hideScrollbar};
				flex-direction: row;
			
			}
			display: flex;
			margin: 0;
			${props => (props.isMobile ? `margin-left: auto;` : `margin-right: auto;`)};
			/* justify-content: ${props =>
				props.isMobile ? `flex-start;` : `flex-end;`}; */
		&__text {
			${mainTransition}
			text-align: ${props => (props.isMobile ? `left;` : `right;`)};
			margin-bottom: 0;
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
			${mobile} {
				margin: .2rem 0 .5rem;
				${props =>
					props.isShowingMore ? `margin: 0 0 .5rem` : `margin: .2rem 0 .5rem`};
				margin-right: 1.5rem
				a {
					white-space: nowrap;
				}
			}
			${props => (props.isMobile ? `margin-right: 1rem;` : `margin-left: 1rem;`)};
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
		margin-top: ${props => (props.isMobile ? `20vh;` : `40vh;`)};
	}

`;

export default MenuContainer;
