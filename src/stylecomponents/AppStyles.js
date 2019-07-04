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
// *TODO appBg: `linear-gradient(to top, #cc208e 0%, #6713d2 100%)`,
// *TODO appBgMobile: `linear-gradient(to bottom, #cc208e 0%, #6713d2 100%)
//  *TODO appBGColor:`transparent`,
export const HerbieDuahApp = styled.div`
	width: 100%;
	content: "";
	overflow: hidden;
	
	background: ${bgColorGradient};
	background-color: transparent;
	position: relative;
	margin: 0;
	height: 100%;

	.hdapp {
		&__pane {
			overflow: ${props => (props.isMobile ? `initial` : `hidden`)};
		}
	}

	/* ${props => {
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
	}} */
`;
