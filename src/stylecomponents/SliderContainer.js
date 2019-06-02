import styled from "styled-components";
import {
	mobile,
	absoluteOverlay,
	fontColor,
	mainTransition
} from "./StyleHelpers";
import { Gradients } from "./Animations";
import { rgba } from "polished";
import { sliderDesktopWidth, sliderMobileWidth } from "../helpers";

export const SliderContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	position: absolute;
	outline: none;
	overflow: hidden;
	user-select: text;
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
			/* background: #000; */
			/* opacity: 0.2; */
			z-index: 1;
			display: flex;
			align-items: center;
			/* -moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-moz-background-clip: padding;
		-webkit-background-clip: padding;
		background-clip: padding-box; */
		}

		&__resizer:hover {
			/* -webkit-transition: all 2s ease;
		transition: all 2s ease; */
		}

		&__resizer.horizontal {
			height: ${sliderDesktopWidth};
			/* margin: -5px 0; */
			/* border-top: 5px solid rgba(255, 255, 255, 0);
		border-bottom: 5px solid rgba(255, 255, 255, 0); */
			display: flex;
			justify-content: center;
			cursor: row-resize;
			width: 100%;
			/* background-color: red; */
			${mobile} {
				height: ${sliderMobileWidth};
			}
		}

		&__resizer.horizontal:hover {
			/* border-top: 5px solid rgba(0, 0, 0, 0.5);
		border-bottom: 5px solid rgba(0, 0, 0, 0.5);
		background-color: red; */
		}

		&__resizer.vertical {
			width: ${sliderDesktopWidth}px;
			/* margin: 0 -5px; */
			/* border-left: 5px solid rgba(255, 255, 255, 0);
		border-right: 5px solid rgba(255, 255, 255, 0); */
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

export const SliderController = styled.div`
	.slider {
		&__circle {
			height: ${sliderDesktopWidth}px;
			width: ${sliderDesktopWidth}px;
			${props => {
				if (props.isMobile) {
					return `
			height: ${sliderMobileWidth}px;
			width: ${sliderMobileWidth}px;`;
				}
			}}
			margin: 0;
			border-radius: 50%;
			border: 3px solid ${fontColor};
			display: flex;
			justify-content: center;
			align-items: center;
			${mainTransition}
			z-index: 10;
			position: relative;
			&:hover,
			&:focus {
				background-color: ${props => props.theme.fontColor};
			}
			${props =>
				props.dragging
					? `
				background-color: ${props.theme.fontColor};
				box-shadow: 0 0 40px ${rgba(props.theme.bgColor, 0.6)};`
					: ``}
			${mobile} {
				height: ${sliderMobileWidth}px;
				width: ${sliderMobileWidth}px;
			}
		}
		&__circle-line {
			&:hover,
			&:focus {
				.slider__line-container {
					opacity: 1;
				}
			}
		}
	}
`;

export const SliderLineContainer = styled.div`
	/* padding: 0 ${props => props.linePadding}px 0; */
	/* padding-top: 0;
	padding-bottom: 0;
	padding-left: ${props => props.linePadding}px;
	padding-right: ${props => props.linePadding}px + ${sliderDesktopWidth}px; */
	${mainTransition}
	padding: 0 ${props =>
		props.linePadding - parseInt(sliderDesktopWidth)}px 0  ${props =>
	props.linePadding}px;
	position: absolute;
	width: 100%;
	/* background: red; */
	/* opacity: 1; */
	pointer-events: none;
	display: flex;
	align-items: center;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	
	.slider {
		&__line {
		width: 100%;
		${mainTransition}
		position:relative;
		z-index: 6;
		border: 1px solid ${fontColor};
		background: ${fontColor};
		opacity: 0.5;
		height: 8px;
		border-radius: 6px;
		${props => {
			if (props.isMobile) {
				return `
		width:8px;
		height: 100%;`;
			}
		}}
	}
	&__gradient{
		${absoluteOverlay};
	}
	&__gradient-animation {
		${absoluteOverlay};
		${mainTransition}
		width: 100%;
		height:100%;
		animation: ${Gradients} ${props => props.gradientValue}s ease-in-out ${props =>
	props.isShowingMore ? "" : "infinite"};
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		${props =>
			props.isShowingMore
				? "background-size: 100% 100%;"
				: "background-size: 400% 400%;"}
		z-index: 1;
	}

	}
	${props => {
		if (props.isMobile) {
			return `
		padding: ${props.linePaddingMobile}px 0 ${props.linePaddingMobile -
				parseInt(sliderMobileWidth)}px;
		justify-content: center;
		align-items: unset;
		height: 100%;`;
		}
	}}
	/* ${mobile} {
		padding: ${props => props.linePaddingMobile}px 0
			${props => props.linePaddingMobile}px;
		justify-content: center;
		align-items: unset;
		height: 100%;
		hr {
			height: 100%;
			margin: 0 0 0 49.7%;
			border-top: 0;
			border-bottom: 0;
			box-shadow: none;
			border-left: 4px solid ${props => props.theme.ctaColor};
			border-right: 0;
			width: 100%;
		}
	} */
`;

export default SliderContainer;
