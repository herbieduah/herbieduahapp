import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	contentMenuPadding
} from "./StyleHelpers";

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
			width:  100%;
			max-width:  ${props => (props.showLess ? `500px` : `740px`)};
			${props => (props.fullScreen ? `margin 0 auto` : ``)};
			/* margin: 0 auto; */
			p {
				${mainTransition}
				font-size: ${props => (props.showLess ? `3em` : `.9em`)};
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
	}
`;

export default ContentContainer;
