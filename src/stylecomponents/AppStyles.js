import styled from "styled-components";
import { Gradients } from "./Animations";
import { fluidTypeInfo } from "./StyleHelpers";
import {
	appBg,
	appBgMobile,
	appBgColor,
	appBgAnimation
} from "./Themes/ThemeVariables";

const dragging = props => props.dragging;
const isPortrait = props => props.isPortrait;

export const HerbieDuahApp = styled.div`
	width: 100%;
	overflow: hidden;
	overscroll-behavior: none;
	/* ${fluidTypeInfo} */
	background: ${props =>
		props.dragging ? appBgAnimation : props.isPortrait ? appBgMobile : appBg};
	animation: ${Gradients} 1.5s ease-in-out ${props =>
	props.dragging ? "infinite" : ""};
	background-size: ${props => (props.dragging ? `400% 400%` : "contain")};
	background-color: ${appBgColor};
	position: relative;
	margin: 0;
	height: 100%;
	.hdapp {
		&__pane {
			overflow: ${props => (props.isPortrait ? `initial` : `hidden`)};
			&.vertical {
				width: ${props => props.splitSize}px;
			}
			&.horizontal {
				height: ${props => props.splitSize}px;
			}
		}
	}
`;
