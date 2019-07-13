import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	contentMenuPadding,
	tablet
} from "./StyleHelpers";

export const ContentContainer = styled.article`
	width: 100%;
	height: 100vh;
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
	figure {
		margin: 0;
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
			max-width:  ${props => (props.showLess ? `500px` : `100%`)};
			${props => (props.fullScreen ? `margin 0 auto` : ``)};
			/* margin: 0 auto; */
			/* p {
				${mainTransition}
				font-size: ${props => (props.showLess ? `1.5em` : `.9em`)};
				margin: 0 auto;
			} */
			${tablet} {
				max-width:  ${props => (props.showLess ? `340px` : `100%`)};
			}
			${mobile} {
				width: 100%;
			}
		}
		&__more {
			${mainTransition}
			padding: 0 2rem;
			margin-bottom: ${props => (props.isPortrait ? `70vh` : `0`)};
		}		
	}

	.c-margin-bottom {
		margin-bottom: 36px;
		${mobile} {
			margin-bottom: 30px;
		}
	}
	.c-margin-top {
		margin-top: 36px;
		${mobile} {
			margin-top: 30px;
		}
	}
`;

export default ContentContainer;
