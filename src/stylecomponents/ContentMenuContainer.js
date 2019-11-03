import styled from "styled-components";
import { mobile, mainTransition } from "./StyleHelpers";
import { revealSecs } from "../helpers";
export const ContentMenuContainer = styled.section`
	${mainTransition}
	
	display: flex;
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100%;

	/* .fade-enter {
		opacity: 0.01;
	} */

	/* .fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity ${revealSecs}ms ease-in;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit.fade-exit-active {
		opacity: 0.01;
		transition: opacity ${revealSecs}ms ease-in;
	} */

	/* div.transition-group {
           position: relative;
      }
      div.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
	 */
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
