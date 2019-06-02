import styled from "styled-components";
import { mobile, mainTransition } from "./StyleHelpers";
export const ContentMenuContainer = styled.section`
	${mainTransition}
	${props => (props.dragging ? "opacity: .4;" : "opacity: 1;")}
	display: flex;
	position: relative;
	z-index: 2;
	overflow: auto;
	width: 100%;
	height: 100%;
    -ms-overflow-style: none;  
	scrollbar-width: none;
	&::-webkit-scrollbar { 
    	display: none; 
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
	ul.blocks {
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
	}
`;
