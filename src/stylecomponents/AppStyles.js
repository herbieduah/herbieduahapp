import styled from "styled-components";
import { Gradients } from "./Animations";
import { fluidTypeInfo, absoluteOverlay } from "./StyleHelpers";
import {
	appBg,
	appBgMobile,
	appBgColor,
	appBgAnimation
} from "./Themes/ThemeVariables";

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
	.animatecss-tamer {
		position:relative;
		width: 100%;
		height: 100%;
	}
	.animatecss-container {
		${absoluteOverlay};
	}

	p.alpha-text {
			background-color: red;
			color: white;	
			font-weight: bold;
			width:100%;
			text-align:center;
			pointer-events: none;
		}
		.in-dev {
			${absoluteOverlay}
			left: 0;
			right: 0;
			z-index: 2000;
			display:flex;
			align-items: flex-end;
			pointer-events: none;
		}

`;
