import styled from "styled-components";
import {
	mobile,
	hideScrollbar,
	mainTransition,
	mobileSliderOnTop,
	contentMenuPadding,
	tablet,
	contentMenuPaddingRight
} from "./StyleHelpers";

export const ContentContainer = styled.article`
	width: 100%;
	height: 100vh;
	${props => (props.isPortrait ? mobileSliderOnTop : ``)};
	${hideScrollbar};
	overflow: auto;
	${props => (props.navBarRight ? contentMenuPaddingRight : contentMenuPadding)};
	${mobile} {
		padding-top: 0;
	}
	padding-bottom: 40vh;
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
	.flex-container {
		display: flex;
		.react-reveal {
			img {
				height: 23vh;
				width: auto;
			}
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
				max-width:  ${props =>
					props.showLess && !props.isPortrait ? `400px` : `100%`};
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
		margin-bottom: 3rem;
		${mobile} {
			margin-bottom: 2.5rem;
		}
	}
	.c-margin-top {
		margin-top: 3rem;
		${mobile} {
			margin-top: 2.5rem;
		}
	}

	.c-margin-0 {
		margin: 0;
	}

	ul.themeCircle {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	ul.appTransition {
		margin: 0;
		padding: 0;	
	}
	.offset {
		width:100%;
		height: 30vh;
		display:block;
	}
	.less-image {
		padding:0 20%;
	}
`;

export default ContentContainer;
