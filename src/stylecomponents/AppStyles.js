import styled from "styled-components";
import { rgba } from "polished";
import { Gradients } from "./Animations";
import {
	mobile,
	bgColor,
	fontColor,
	mainTransition,
	bgColorGradient,
	hideScrollbar,
	fluidTypeInfo
} from "./StyleHelpers";
import { sliderDesktopWidth, sliderMobileWidth } from "../helpers";
// *TODO appBg: `linear-gradient(to top, #cc208e 0%, #6713d2 100%)`,
// *TODO appBgMobile: `linear-gradient(to bottom, #cc208e 0%, #6713d2 100%)
//  *TODO appBGColor:`transparent`,
export const HerbieDuahApp = styled.div`
	width: 100%;
	content: "";
	overflow: hidden;
	${fluidTypeInfo}
	background: ${bgColorGradient};
	animation: ${Gradients} 1.5s ease-in-out ${props =>
	props.dragging ? "infinite" : ""};
	${props => (props.dragging ? `background-size: 400% 400%;` : "")}
	background-color: transparent;
	position: relative;
	margin: 0;
	height: 100%;
	

	.hdapp {
		&__pane {
			overflow: ${props => (props.isPortrait ? `initial` : `hidden`)};
		}
	}

	/* ${props => {
		if (props.isPortrait) {
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
