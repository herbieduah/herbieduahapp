import styled from "styled-components";
import { mobile } from "./StyleHelpers";

const MenuContainer = styled.aside`
	width: 100%;
	padding: 4rem;
	display: flex;
	justify-content: right;
	overflow:auto;
	${mobile} {
		padding: 0rem 1.5rem;
	}
	/* align-items: ${props => (props.isMobile ? `initial` : `center`)}; */
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
	}
	button {
		border: 0;
		padding: 0;
		margin: 0.1rem 0;
		background: none;
	}

	.menu {
		width: 100%;
		/* display: flex;
    justify-content: flex-end; */
		&__button {
			margin-left: auto;
			font-size: 1.5em;
		}
		&__logo {
			margin-left: auto;
		}

		&__list {
			/* width: 100%; */
			text-align: right;
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
