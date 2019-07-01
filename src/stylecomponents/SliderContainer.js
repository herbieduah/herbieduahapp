import styled from "styled-components";
import {
	mobile,
	absoluteOverlay,
	fontColor,
	mainTransition,
	bgColor
} from "./StyleHelpers";
import { Gradients, pulseRing } from "./Animations";
import { rgba } from "polished";
import { sliderDesktopWidth, sliderMobileWidth } from "../helpers";

export const SliderContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	position: absolute;
	outline: none;
	overflow: hidden;
	user-select: none;
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
			z-index: 3;
			display: flex;
			align-items: center;
			user-select: none;
			position: relative;
		}
		&__resizer.horizontal {
			height: ${sliderDesktopWidth}px;
			/* margin: -5px 0; */
			/* border-top: 5px solid rgba(255, 255, 255, 0);
		border-bottom: 5px solid rgba(255, 255, 255, 0); */
			display: flex;
			justify-content: center;
			cursor: row-resize;
			width: 100%;
			/* background-color: red; */
			${mobile} {
				height: ${sliderMobileWidth}px;
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
			
			user-select: none; 
			&__triangle{
				${mainTransition}
				width: 0;
				height: 0;
				border: 0 solid transparent;
				transform: ${props => (props.dragging ? "scale(2.1);" : "scale(1)")};

				&.desktop {
					border-top-width: 6px;
					border-bottom-width: 6px;
					margin: ${props => (props.dragging ? "0 50px" : "0 9px")};
				}
				&.mobile{
					border-left-width: 6px;
					border-right-width: 6px;
					margin: ${props => (props.dragging ? "50px 0" : "7px 0")};
				}
				
				&--left {
					border-right: 8px solid ${fontColor};
				}
				&--right {
					border-left: 8px solid ${fontColor};
				}
				&--top {
					border-bottom: 8px solid ${fontColor};
				}
				&--bottom {
					border-top: 8px solid ${fontColor};
				}
				
			}
		&__circle {
			height: ${sliderDesktopWidth}px;
			width: ${sliderDesktopWidth}px;
			cursor: col-resize;
			${props => {
				if (props.isMobile) {
					return `
			height: ${sliderMobileWidth}px;
			width: ${sliderMobileWidth}px;
			flex-direction: column;
			`;
				}
			}}
			display: flex;
			align-items: center;
			justify-content: center;
			
			margin: 0;
			border-radius: 50%;
			border: 1px solid ${props => rgba(props.theme.fontColor, 0.5)};
			display: flex;
			justify-content: center;
			align-items: center;
			${mainTransition}
			z-index: 10;
			background-color: ${props =>
				props.dragging ? props.theme.fontColor : "transparent"};
			position: relative;
			&:hover,
			&:focus {
				transform: scale(0.95);
				transform: ${props => (props.dragging ? "scale(0.6)" : "scale(.95)")};
			}
			transform: ${props => (props.dragging ? "scale(0.6)" : "scale(1)")};
			

			/* ${props =>
				props.dragging
					? `
				background-color: ${props.theme.fontColor};
				box-shadow: 0 0 40px ${rgba(props.theme.bgColor, 0.6)};`
					: ``} */
			${mobile} {
				height: ${sliderMobileWidth}px;
				width: ${sliderMobileWidth}px;
			}
		}
		/* &__circle-line {
			&:hover,
			&:focus {
				.slider__line-container {
					opacity: 1;
				}
			}
		} */
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
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	/* opacity: ${props => (props.dragging ? "1;" : "0;")}; */
	opacity: 1;
	
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
	
	.slider__line {
		width: 100%;
		${mainTransition}
		position:relative;
		z-index: 10;
		/* border: 1px solid ${fontColor};
		background: ${fontColor}; */
		opacity: 0.5;
		height: 4px;
		/* background-image: linear-gradient(to right, transparent 50%, ${fontColor} 50%);
		   background-size: 25px 100% ; */
		   background-image: ${props =>
					props.isMobile
						? `linear-gradient(to bottom, transparent 50%, ${
								props.theme.fontColor
						  } 50%);`
						: `linear-gradient(to right, transparent 50%, ${
								props.theme.fontColor
						  } 50%);`};
		background-size: ${props => (props.isMobile ? `100% 25px;` : `25px 100%;`)};
		
		${props => {
			if (props.isMobile) {
				return `
		width:8px;
		height: 100%;
		`;
			}
		}}
	}
	.slider {
	&__instructions {
		p {
			margin: 0;
			padding: 0;
			line-height: 1;
			color: ${props => props.theme.bgColor};
			text-align:center;
			width:100%;
		}
		background-color: ${props => rgba(props.theme.fontColor, 0.7)};
		display:flex;
		align-items: center;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		position:relative;
		&:before {
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
			background-color: ${props => rgba(props.theme.fontColor, 0.7)};
			animation: ${pulseRing} 3.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
		}
	}
	&__line-content {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 10;
			align-items: center;
			${props => {
				if (props.isMobile) {
					return `
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;`;
				}
			}}
	}
		
	&__gradient{
		${absoluteOverlay};
	}
	/* &__instructions-container {
		position: relative;
		width: 100%;
		height: 100%;
		display:flex;
		align-items: center;
		z-index: 100;
	} */
	/* background-image: linear-gradient(to right bottom, #ffe01b, #f88947, #b3505e, #55334b, #111111); */
	/* background-image: linear-gradient(to right top, #c2292b, #d35082, #c283c3, #afafe2, #bbd1e8); */
	&__gradient-animation {
		${absoluteOverlay};
		${mainTransition}
		width: 100%;
		height:100%;
		animation: ${Gradients} 1.5s ease-in-out ${props =>
	props.isShowingMore ? "" : "infinite"};
		background: linear-gradient( ${props =>
			props.gradientDir}, #4a148c, #7352ad, #9e8bcb, #ccc4e6, #ffffff);
		background-size: 400% 400%;
		${props =>
			props.isShowingMore
				? "background-size: 100% 100%;"
				: "background-size: 400% 400%;"}
		z-index: 1;
	}

	
	
}

`;

export default SliderContainer;
