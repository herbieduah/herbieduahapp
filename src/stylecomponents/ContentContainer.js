import styled from "styled-components";
import { mobile, bgColor, absoluteOverlay } from "./StyleHelpers";

export const ContentContainer = styled.article`
	height: 100%;
	width: 100%;
	/* .shadowOverlayContainer {
		${absoluteOverlay}
	}
	.shadowOverlay {
		position: relative;
		&:before {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		pointer-events: none;
		box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};
		${mobile} {
			box-shadow: 0 0 2rem 2rem ${bgColor}, 0 0 1rem 1rem ${bgColor};	
		}
	}
	&:after {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		pointer-events: none;
		box-shadow: 0 0 100px 100px ${bgColor}, 0 0 50px 50px ${bgColor};
		${mobile} {
			box-shadow: 0 0 50px 50px ${bgColor}, 0 0 25px 25px ${bgColor};	
		}
	} */

	
	
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
	}
	.content {
		&__header {
			
		}
		&__less {
			width: 100%;
			max-width: 580px;
			margin-top: 4rem;
			padding: 0rem 2rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			
			/* opacity: ${props => (props.isShowingMore ? `0` : `1`)}; */
			${mobile} {
				margin-top: 4rem;	
				padding: 0rem 1.5rem;
			}
			p {
				font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			}
		}
		&__more {
			margin-top: 4rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			padding: 0 2rem;
			margin-bottom: ${props => (props.isMobile ? `70vh` : `0`)};
			${mobile} {
				margin-top: 4rem;	
				padding: 0 1.5rem;
			}
		}
	}
`;

export default ContentContainer;
