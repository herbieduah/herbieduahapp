import styled from "styled-components";
// import { Gradients } from "./Animations";
import {
	fluidTypeInfo,
	absoluteOverlay,
	mainTransition,
	userSelectNone,
	mobile
} from "./StyleHelpers";
import {
	appBg,
	appBgMobile,
	appBgColor,
	bgColorOverlay,
	fontColorOpposite,
	fontColor
	// appBgAnimation
} from "./Themes/ThemeVariables";
// import Matrix from "react-matrix-effect";
// animation: ${Gradients} 1.5s ease-in-out ${props =>
// 	props.dragging ? "infinite" : ""};
// 	background-size: ${props => (props.dragging ? `400% 400%` : "contain")};
export const HerbieDuahApp = styled.main`
	img,video {
		${props => (props.fullscreen ? "" : "pointer-events: none;")};
	}
	width: 100%;
	overflow: hidden;
	overscroll-behavior: none;
	/* ${fluidTypeInfo} */
	background: ${props => (props.isPortrait ? appBgMobile : appBg)};
	background-color: ${appBgColor};
	position: relative;
	margin: 0;
	height: 100%;
	&::after{
		content:'';
		${absoluteOverlay};
		background-color: ${bgColorOverlay};
		pointer-events: none;
	}
	
	.navbar {
			${mainTransition}
			opacity : ${props => (props.dragging ? "0" : "1")};
			${props => (props.showFSMobileHorizontal ? "display:none;" : "")};
	}
	section.hdapp__menu aside{
		${mobile} {
			padding-right: ${props => (props.dragging ? "0 !important;" : "")};
			padding-left: ${props => (props.dragging ? "0 !important;" : "")};
		}	
	}
	section.hdapp__content{
	 .content {
		/* transform: perspective(300px) rotateX(15deg); */
		${mobile} {
			padding-right: ${props => (props.dragging ? "0 !important;" : "")};
			padding-left: ${props => (props.dragging ? "0 !important;" : "")};
		}	
	}
	}
	.hdapp {
		
		
		.navbar {
		${mainTransition}
		opacity : ${props => (props.dragging ? "0" : "1")};
		}
		/* &__menu {
				${mainTransition}
				opacity : ${props => (props.dragging ? "0" : "1")};
		} */
		&__pane {
			/* overflow: ${props => (props.isPortrait ? `initial` : `hidden`)}; */
			&.vertical {
				width: ${props => props.splitSize}px;
			}
			&.horizontal {
				height: ${props => props.splitSize}px;
			}
		}
		&__border{
			opacity : ${props => (props.minimalMode ? "0" : "1")};
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
			background-color:${fontColor};
			color: white;	
			font-weight: ${fontColorOpposite};
			width:100%;
			text-align:center;
			pointer-events: none;
			${userSelectNone}
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

// export const TheMatrix = styled(Matrix)`
// 	${absoluteOverlay};
// `;
