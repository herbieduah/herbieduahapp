import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	navBarSize,
	contentMenuPadding
} from "./StyleHelpers";
import { sliderMobileWidth } from "../helpers";

export const ContentContainer = styled.article`
	width: 100%;
	height: 100%;
	${props => (props.isPortrait ? mobileSliderOnTop : ``)};
	
	${hideScrollbar};
	overflow: auto;
	${contentMenuPadding}
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
	}
	.container {
			max-width: 740px;
			width: 100%;
			${props => (props.fullScreen ? `margin: 0 auto` : ``)};
	}
	.container-full {
		width: 100%;
	}
	.col-50 {
		width: 50%;
		${mobile} {
			width: 100%;
		}
	}
	.content {
		&__header {
			h1 {
				${mainTransition}
				user-select: none;
				cursor: pointer;
			}
		}
		&__less {
			width:  ${props => (props.showLess ? `500px` : `100%`)};
			max-width:  ${props => (props.showLess ? `500px` : `740px`)};
			${props => (props.fullScreen ? `margin 0 auto` : ``)};
			/* margin: 0 auto; */
			p {
				${mainTransition}
				font-size: ${props => (props.showLess ? `1.2em` : `.9em`)};
				margin: 0 auto;
			}
			${mobile} {
				font-size: ${props => (props.showLess ? `1em` : `.85em`)};
				width: 100%;
			}
		}
		&__more {
			${mainTransition}
			padding: 0 2rem;
			margin-bottom: ${props => (props.isPortrait ? `70vh` : `0`)};
		}
		
		/* &__slider-bg {
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				width: 100%;
				opacity: .8;
				height: ${sliderMobileWidth}px;
				z-index: 3;
				background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
		} */
	}
`;

export default ContentContainer;
