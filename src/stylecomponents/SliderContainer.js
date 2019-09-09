import styled from "styled-components";
// import { rgba } from "polished";
import {
	mobile,
	absoluteOverlay,
	mainTransition,
	// slightCircleBoxShadow,
	userSelectNone,
	slightBoxShadowAbove
} from "./StyleHelpers";
import {
	sliderArrow,
	CTAColor,
	sliderArrowSecondary,
	sliderArrowActive,
	sliderArrowOpacity,
	sliderCircleBorder,
	sliderCircleBg,
	sliderCircleHoverFocus,
	sliderCircleActive,
	sliderCircleOpacity,
	sliderLine,
	sliderLinePortrait,
	borderThin,
	sliderBg,
	fontColorOpposite,
	buttonColorHoverFocus
} from "./Themes/ThemeVariables";
import { pulseRing } from "./Animations";
import { sliderDesktopWidth, sliderMobileWidth } from "../helpers";

export const SliderContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	position: absolute;
	outline: none;
	overflow: hidden;
	${userSelectNone}
	${props =>
		props.direction === "vertical"
			? `flex-direction: row;
				left: 0;
				right: 0;`
			: `bottom: 0;
				flex-direction: column;
				min-height: 100%;
				top: 0;
				width: 100%;`}
	.hdapp {
		&__pane {
			overflow: hidden;
		}
		&__resizer {
			z-index: 3;
			display: flex;
			align-items: center;
			${userSelectNone}
			position: relative;
		}
		&__resizer.horizontal {
			height: ${sliderDesktopWidth}px;
			display: flex;
			justify-content: center;
			background: ${sliderBg};
			/* background: blue; */
			cursor: row-resize;
			width: 100%;
			${mobile} {
				height: ${sliderMobileWidth}px;
				background: ${sliderBg};
			}
		}

		&__resizer.horizontal:hover {
			/* border-top: 5px solid rgba(0, 0, 0, 0.5);
		border-bottom: 5px solid rgba(0, 0, 0, 0.5);
		background-color: red; */
		}

		&__resizer.vertical {
			width: ${sliderDesktopWidth}px;
			background: ${sliderBg};
			cursor: col-resize;
			/* background-color: red; */
		}

		&__resizer.vertical:hover {
			/* border-left: 5px solid rgba(0, 0, 0, 0.5);
		border-right: 5px solid rgba(0, 0, 0, 0.5); */
		}
		&__resizer.disabled {
			cursor: not-allowed;
		}
		&__resizer.disabled:hover {
			border-color: transparent;
		}
	}
`;

// *TODO sliderCircleBg: `${CTAColor}`,
// *TODO sliderCircleHoverFocus: `${fontColor}`,
// *TODO sliderCircleActive: `${fontColor}`,
// *TODO sliderCircleOpacity: `0`,
export const SliderController = styled.div`
	.slider {
		${userSelectNone}
		&__triangle {
			${mainTransition}
			width: 0;
			height: 0;
			border: 0 solid transparent;
			opacity: ${sliderArrowOpacity};
			transform: ${props => (props.dragging ? "scale(2.1);" : "scale(1)")};
			&.desktop {
				border-top-width: 6px;
				border-bottom-width: 6px;
				margin: ${props => (props.dragging ? "0 50px" : "0 9px")};
			}
			&.mobile {
				border-left-width: 6px;
				border-right-width: 6px;
				margin: ${props => (props.dragging ? "50px 0" : "7px 0")};
			}
			&--left {
				border-right: 8px solid
					${props => (props.dragging ? sliderArrowActive : sliderArrow)};
			}
			&--right {
				border-left: 8px solid
					${props => (props.dragging ? sliderArrowActive : sliderArrowSecondary)};
			}
			&--top {
				border-bottom: 8px solid
					${props => (props.dragging ? sliderArrowActive : sliderArrow)};
			}
			&--bottom {
				border-top: 8px solid
					${props => (props.dragging ? sliderArrowActive : sliderArrowSecondary)};
			}
		}
		&__line {
			z-index: 1;
			&--is-landscape {
				margin-left: ${sliderDesktopWidth / 2 - 1}px;
				border-left: ${borderThin};
			}
			&--is-portrait {
				/* margin-top: ${sliderMobileWidth / 2 - 1}px;
				border-top: ${borderThin};
				${slightBoxShadowAbove}; */
				${slightBoxShadowAbove}
				overflow:hidden;
			}
			${absoluteOverlay}
		}
		&__circle {
			&-line {
				${props => (props.isPortrait ? `` : `right: 29px;`)};
				${props => (props.isPortrait ? `` : `position: relative;`)};
				border: 0;
			}
			/* ${absoluteOverlay}; */
			/* ${absoluteOverlay} */
			/* height: ${props => (props.isPortrait ? `60px` : sliderDesktopWidth)}px;
			width: ${props => (props.isPortrait ? `60px` : sliderDesktopWidth)}px; */
			height: 60px;
			width: 60px;
			opacity: ${sliderCircleOpacity};
			${props => (props.isPortrait ? `flex-direction: column` : "")};
			cursor: col-resize;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
			margin: 0;
			border-radius: 50%;
			border: ${sliderCircleBorder};
			display: flex;
			justify-content: center;
			align-items: center;
			${mainTransition}
			z-index: 10;
			background: ${props => (props.dragging ? sliderCircleActive : sliderCircleBg)};
			position: relative;
			/*  */
			&:hover,
			&:focus {
				transform: scale(0.9);
				transform: ${props => (props.dragging ? "scale(0.6)" : "scale(.95)")};
				background: ${sliderCircleHoverFocus};
			}
			transform: ${props => (props.dragging ? "scale(0.6)" : "scale(1)")};
			${mobile} {
				height: 60px;
				width: 60px;
			}
		}
	}
`;

export const SliderLineContainer = styled.div`
	${mainTransition}
	padding: 0 ${props =>
		props.linePadding - parseInt(sliderDesktopWidth)}px 0  ${props =>
	props.linePadding}px;
	position: absolute;
	width: 100%;
	pointer-events: none;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 1;
	${userSelectNone};
	${props =>
		props.isPortrait
			? `
		padding: ${props.linePaddingMobile}px 0 ${props.linePaddingMobile}px;
		justify-content: center;
		align-items: unset;
		height: 100%;`
			: ``}
	}
	
	.slider__line {
		width: ${props => (props.isPortrait ? `4px` : `100%`)};
		${mainTransition}
		position:relative;
		z-index: 10;
		opacity: 0.5;
		height: ${props => (props.isPortrait ? `100%` : `2px`)};
		${userSelectNone}
		background-image: ${props =>
			props.isPortrait ? sliderLinePortrait : sliderLine};
		background-size: ${props => (props.isPortrait ? `100% 25px;` : `25px 100%;`)};
	}
	.slider {
		&__instructions {
		p {
			margin: 0;
			padding: 0;
			line-height: 1;
			color: ${fontColorOpposite};
			text-align:center;
			width:100%;
		}
		background-color: ${buttonColorHoverFocus};
		display:flex;
		align-items: center;
		border-radius: 50%;
		height: 60px;
		width: 60px;
		position:relative;
		/* &:before {
			content: '';
			${absoluteOverlay}
			display: block;
			width: 300%;
			height: 300%;
			z-index: -1;
			box-sizing: border-box;
			margin-left: -100%;
			margin-top: -100%;
			border-radius: 50%;
			background-color: ${CTAColor};
			animation: ${pulseRing} 3.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
		} */
	}
	&__line-content {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 10;
			align-items: center;
			${props => {
				if (props.isPortrait) {
					return `
			justify-content: center;
			flex-direction: column;`;
				}
			}}
	}	
	


`;

export default SliderContainer;
