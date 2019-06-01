import styled from "styled-components";
import { mobile, bgColor, fontColor } from "./StyleHelpers";

const MenuContainer = styled.aside`
	width: 100%;
	padding: 4rem;
	display: flex;
	justify-content: right;
	overflow: auto;

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
	}
	button {
		border: 0;
		padding: 0;
		margin: 0.1rem 0;
		background: none;
		color: ${fontColor};
	}

	.menu {
		width: 100%;
		/* display: flex;
    justify-content: flex-end; */
		&__button {
			margin-left: auto;
			font-size: 1.5em;
			text-transform: capitalize;
		} 
		&__logo {
			.inner-rect, .half-circle {
				fill: ${bgColor}
				
			}
			.outer-rect {
				fill: ${fontColor};
			}
		}

		&__list {
			/* width: 100%; */
			text-align: right;
			margin-top: 0;
			margin-left:auto;
		}
		&__item {
			margin-bottom: 0.3rem;
			/* display: flex;
      justify-content: flex-end; */
		}
	}
	.subMenu {
		&__list {
			margin-bottom: 1rem;
		}
		&__item {
			font-size: 1.1rem;
			margin: 0.4rem 0;
		}
	}

`;

export default MenuContainer;
