import styled from "styled-components";
import {
	mobile,
	bgColor,
	fontColor,
	mainTransition,
	hideScrollbar
} from "./StyleHelpers";
import { rgba } from "polished";

const MenuContainer = styled.aside`
	/* ${hideScrollbar}; */
	width: 100%;
	max-width: 500px;
	margin-left: auto;
	padding: 4rem 2rem;
	display: flex;
	justify-content: right;
	${props => (props.isShowingMore ? `overflow-x: auto` : `overflow: auto`)};
	${props => {
		if (props.isMobile) {
			return `
				margin-top: ${props.isShowingMore ? `.0` : `1rem`};
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

	.menu {
		width: 100%;
		margin-bottom: 20vh;
		/* display: flex;
    justify-content: flex-end; */
		&__button {
			margin-left: auto;
			text-transform: capitalize;
			/* height: 1.7rem; */
			margin: 0 0 1.5%;
			border-bottom: none;
		} 
		&__logo {
			margin-bottom: 0.5rem;
			.inner-rect, .half-circle {
				${mainTransition}
				fill: ${bgColor};
				
			}
			.outer-rect {
				${mainTransition}
				fill: ${fontColor};
				&:hover {
					fill: ${bgColor};
				}
			}
			svg {
				${mainTransition}
				border: none;
			}
			svg:hover,svg:focus {
				.inner-rect, .half-circle {
					fill: ${fontColor};
				}
				.outer-rect {
					fill: ${bgColor};
				}
				border: 3px solid ${fontColor};
			}
		}

		&__list {
			/* width: 100%; */
			text-align: right;
			margin-top: 0;
			margin-left:auto;
			${props => {
				if (props.isMobile) {
					return `
			text-align: left;`;
				}
			}}
		}
		&__item {
			margin-bottom: 0.3rem;
			/* display: flex;
      justify-content: flex-end; */
		}
	}
	.subMenu {
		ul.react-reveal{ 
			margin: 0 1.2rem;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			${props => {
				if (props.isMobile) {
					return `
					justify-content: flex-start;`;
				}
			}}
			}
		&__item {
			font-size: 1rem;
			
			margin: .7rem 0;
			margin-left: 1rem;
			/* border-bottom: 1px solid ${props => rgba(props.theme.fontColor, 0.5)}; */
			${props => {
				if (props.isMobile) {
					return `
					margin: 0.5rem 0;
					margin-left: 0;
					margin-right: 1rem;
					
					`;
				}
			}}
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

	.react-tabs {
  	-webkit-tap-highlight-color: transparent;
  	width: 100%;

		&__tab-list {
			/* border-bottom: 1px solid #aaa;
			margin: 0 0 10px;
			padding: 0; */
			display:flex;
			justify-content: space-between;
			margin: 0;
		}

		&__tab {
			/* display: inline-block;
			border: 1px solid transparent;
			border-bottom: none;
			bottom: -1px;
			position: relative;
			list-style: none;
			padding: 6px 12px; */
			${mainTransition}
			cursor: pointer;

			&--selected {
				border-bottom: 2px solid ${fontColor};
				span {
					font-weight: bold;
				}
			}

			&--disabled {
			/* color: GrayText; */
			cursor: default;
			}

			&:focus {
				span {
					font-weight: bold;
				}
			}
		}

		&__tab-panel {
			display: none;

			&--selected {
			display: block;
			}
		}
}

`;

export default MenuContainer;
