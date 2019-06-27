import styled from "styled-components";
import {
	mobile,
	fontColor,
	mainTransition,
	hideScrollbar
} from "./StyleHelpers";
import { rgba } from "polished";

const MenuContainer = styled.aside`
	${hideScrollbar};
	width: 100%;
	max-width: 500px;
	height: auto;
	overflow: auto;
	margin-left: auto;
	padding: 4rem 2rem;
	display: flex;
	${mobile} {
		max-width: none;	
		width: 100%;
		${props => (props.isShowingMore ? `display: block;` : `display: flex;`)};
		/* height: 120px; */
	}
	
	
	justify-content: right;
	flex-direction: column;
	/* ${props => (props.isShowingMore ? `overflow-x: auto` : `overflow: auto`)}; */
	${props => {
		if (props.isMobile) {
			return `
				margin-top: ${props.isShowingMore ? `0rem;` : `1rem;`}
				`;
		}
	}}
	

	${mobile} {
		padding: 0rem 1.5rem;
	}
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
			/* ${props => (props.isMobile ? `margin: 0 0rem;` : `margin: 0 1.2rem;`)}; */
			width: 100%;

			${mobile} {
				/* width: 132%;
				height: 7rem;
				${props => (props.isShowingMore ? `width 367%` : `width: 132%;`)};
				${props => (props.isShowingMore ? `height: 5rem;` : `height: 7rem;`)};
				overflow-x: auto; */
			}
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			${props => (props.isMobile ? `margin-left: auto;` : `margin-right: auto;`)};
			justify-content: ${props => (props.isMobile ? `flex-start;` : `flex-end;`)};
		&__text {
			${mainTransition}
			text-align: ${props => (props.isMobile ? `left;` : `right;`)};
			margin-bottom: 1%;
			margin-top: 5%;
			width: 100%;
			border-bottom: 1px solid ${props => rgba(props.theme.fontColor, 0.3)};
			display: block;
		}
		
		&__item {
			
			margin: .4rem 0;
			
			${props => (props.isMobile ? `margin-right: 0.5rem;` : `margin-left: 0.1rem;`)};
			/* border-bottom: 1px solid ${props => rgba(props.theme.fontColor, 0.5)}; */
			/* ${props => {
				if (props.isMobile) {
					return `
					margin: 0.5rem 0;
					margin-left: 0;
					margin-right: .7rem;
					
					`;
				}
			}} */
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
		margin-top: ${props => (props.isMobile ? `5vh;` : `40vh;`)};
	}

`;

export default MenuContainer;
