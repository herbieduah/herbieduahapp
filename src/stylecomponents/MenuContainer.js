import styled from "styled-components";
import {
	mobile,
	fontColor,
	mainTransition,
	hideScrollbar,
	mobileSliderOnBottom,
	slightBoxShadowAbove,
	contentMenuPadding,
	stupidNegativeMargin
} from "./StyleHelpers";

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
	z-index: 10;
	${contentMenuPadding}
	${mainTransition}
	${props => (props.isPortrait ? mobileSliderOnBottom : ``)};
	${props =>
		props.isShowingMore && props.isPortrait ? slightBoxShadowAbove : ``};
	/* ${props =>
		props.isPortrait ? `margin-top: ${stupidNegativeMargin}` : ``} */
	
	.react-tabs {
		padding: 1rem 0;
		
		&__tab-list {
			${props => (props.isPortrait ? `margin-right: auto;` : `margin-left: auto`)};
			max-width: 500px;
			${props => (props.isPortrait ? `padding-right: 1rem;` : ``)};
			${props => (props.isPortrait ? `margin-top: 4rem;` : ``)};
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
			flex-direction: column;
			${props => (props.isPortrait ? `text-align: left;` : `text-align: right;`)};
			${mobile} {
				overflow-x: auto;
				${hideScrollbar};
				flex-direction: row;
			
			}
			display: flex;
			margin: 0;
			${props => (props.isPortrait ? `margin-left: auto;` : `margin-right: auto;`)};

		&__text {
			${mainTransition}
			text-align: ${props => (props.isPortrait ? `left;` : `right;`)};
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
			${props => (props.isPortrait ? `margin-right: 1rem;` : `margin-left: 1rem;`)};
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
