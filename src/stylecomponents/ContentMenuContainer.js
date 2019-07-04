import styled from "styled-components";
import { mobile, mainTransition, bgColor, hideScrollbar } from "./StyleHelpers";
export const ContentMenuContainer = styled.section`
	${mainTransition}
	${props => (props.dragging ? "opacity: .4;" : "opacity: 1;")}
	display: flex;
	position: relative;
	z-index: 2;
	/* overflow: auto; */
	width: 100%;
	height: 100%;
	/* ${hideScrollbar} */
	/* &.hdapp__menu {
		${props => (props.isShowingMore ? `` : `overflow: auto`)};	
	} */
	&:before {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		pointer-events: none;
		${props =>
			props.dragging
				? `box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};`
				: ""}
		${mobile} {
			${props =>
				props.dragging
					? `box-shadow: 0 0 2rem 2rem ${bgColor}, 0 0 1rem 1rem ${bgColor};`
					: ""}
		}
	}

	/* &::-webkit-scrollbar-track {
		background-color: ${props => props.theme.bgColor};
	}

	&::-webkit-scrollbar {
		width: 10px;
		background-color: ${props => props.theme.bgColor};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.bgColor};
	} */
	/* ul.blocks {
		margin: 0;
		padding: 0;
		display: block;
	}
	li.blocks {
		list-style: none;
	}
	${mobile} {
		width: 100% !important;
		padding: 0;
		height: 100%;
		-webkit-overflow-scrolling: touch;
	} */
`;
