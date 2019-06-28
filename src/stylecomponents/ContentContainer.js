import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop
} from "./StyleHelpers";
import { sliderMobileWidth } from "../helpers";

export const ContentContainer = styled.article`
	width: 100%;
	${props => (props.isMobile ? mobileSliderOnTop : ``)};
	
	${hideScrollbar};
	overflow: auto;
	padding: 4rem 2rem;
	${mobile} {
		padding: 4rem 1rem;
	}
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
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
			width: 100%;
			max-width: 580px;
			
			p {
				${mainTransition}
				font-size: ${props => (props.showLess ? `1.2em` : `.9em`)};
			}
			${mobile} {
				font-size: ${props => (props.showLess ? `1em` : `.8em`)};
			}
		}
		&__more {
			${mainTransition}
			padding: 0 2rem;
			margin-bottom: ${props => (props.isMobile ? `70vh` : `0`)};
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
