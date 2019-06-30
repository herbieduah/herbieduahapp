import styled from "styled-components";
import { rgba } from "polished";
import {
	mobile,
	bgColor,
	fontColor,
	mainTransition,
	bgColorGradient,
	hideScrollbar
} from "./StyleHelpers";
import { sliderDesktopWidth, sliderMobileWidth } from "../helpers";

export const HerbieDuahApp = styled.div`
	@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portait) {
		.hdapp {
			display: none;
		}
	}
	width: 100%;
	content: "";
	overflow: hidden;
	background-image: ${bgColorGradient};
	position: relative;
	margin: 0;
	height: 100%;

	.hdapp {
		&__pane {
			overflow: ${props => (props.isMobile ? `initial` : `hidden`)};
		}
	}

	button {
		font-family: "commuters-sans", -apple-system, BlinkMacSystemFont, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	${props => {
		if (props.isMobile) {
			return `
				position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-bottom: 3px solid red;
		z-index: 10;`;
		}
	}}
`;
