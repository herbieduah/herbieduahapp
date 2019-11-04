import styled from "styled-components";
// import { Gradients } from "./Animations";
import {
	fluidTypeInfo,
	absoluteOverlay,
	mainTransition,
	userSelectNone,
	mobile,
	paddingLRSm,
	navBarSize,
	appMarginsAndPaddings,
	starWarsPerspective
} from "./StyleHelpers";
import {
	appBg,
	appBgMobile,
	appBgColor,
	bgColorOverlay,
	// fontColorOpposite,
	// fontColor,
	colorSlightOpacity
	// appBgAnimation
} from "./Themes/ThemeVariables";
// import Matrix from "react-matrix-effect";
// animation: ${Gradients} 1.5s ease-in-out ${props =>
// 	props.dragging ? "infinite" : ""};
// 	background-size: ${props => (props.dragging ? `400% 400%` : "contain")};
export const HerbieDuahApp = styled.main`
	${mobile}{
	img,video {
		${props =>
			props.fullscreen || props.accessible ? "" : "pointer-events: none;"};
	}
	}
	${appMarginsAndPaddings}
	
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
	button,li, span, a{
		&:focus{
			${props =>
				props.showOutline
					? `outline-width: 2px;
   			outline-style: dashed;`
					: `outline: none;`}
    		/* outline-color: ${colorSlightOpacity}; */
		}
	}
	
	.navbar {
			${mainTransition}
			opacity : ${props => (props.dragging ? "0" : "1")};
			${props => (props.showFSMobileHorizontal ? "display:none;" : "")};
	}
	.accessibility {
		${mainTransition}
		opacity : ${props => (props.dragging ? "0" : "1")};
	}
	section.hdapp__menu aside{
		${mobile} {
			padding-right: ${props => (props.dragging ? "0 !important;" : "")};
			padding-left: ${props => (props.dragging ? "0 !important;" : "")};
		}	
	}
	section.content-container {
		${props => (props.currentTheme === "starwars" ? `${starWarsPerspective}` : "")}
	}
	section.hdapp__content{
		
	 .content {
		/* transform: perspective(300px) rotateX(15deg); */
		${mobile} {
			/* transform: perspective(300px) rotateX(15deg) scale(.7); */
			padding-bottom: 10rem;
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
			${props =>
				props.currentTheme === "starwars"
					? `border-left: none !important;`
					: ""}
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
			color: ${colorSlightOpacity};
			width:100%;
			${paddingLRSm};
			text-align:left;
			pointer-events: none;
			padding-bottom: 2px;
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
			padding: ${props => (props.isPortrait ? "0" : `0 ${navBarSize} ${navBarSize}`)};
		}

`;

// export const TheMatrix = styled(Matrix)`
// 	${absoluteOverlay};
// `;
