import styled from "styled-components";
import { mobile } from "./StyleHelpers";
export const ContentMenuContainer = styled.section`
	display: flex;
	position: relative;
	z-index: 1;
	overflow: auto;
	&::-webkit-scrollbar-track {
		background-color: ${props => props.theme.bgColor};
	}

	&::-webkit-scrollbar {
		width: 10px;
		background-color: ${props => props.theme.bgColor};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.bgColor};
	}
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
		-webkit-overflow-scrolling: touch;
	}
`;
