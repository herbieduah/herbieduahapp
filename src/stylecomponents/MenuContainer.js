import styled from "styled-components";
import { mobile, bgColor, fontColor, mainTransition } from "./StyleHelpers";
import { rgba } from "polished";

const MenuContainer = styled.aside`

	width: 100%;
	padding: 4rem 2rem;
	display: flex;
	justify-content: right;
	overflow: auto;
	${props => {
		if (props.isMobile) {
			return `
				margin-top: 3.5rem;`;
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
		&__list {
			margin-bottom: 1.2rem;
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
			margin: 0.4rem 0;
			margin-left: 1rem;
			border-bottom: 1px solid ${props => rgba(props.theme.fontColor, 0.5)};
			${props => {
				if (props.isMobile) {
					return `
					margin-left: 0;
					margin-right: 1rem;
					`;
				}
			}}
		}
	}

`;

export default MenuContainer;
