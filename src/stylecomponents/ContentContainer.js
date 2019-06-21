import styled from "styled-components";
import { mobile, hideScrollbar } from "./StyleHelpers";

export const ContentContainer = styled.article`
	height: 100%;
	width: 100%;
	${hideScrollbar};
	overflow: auto;
	margin-top: 4rem;
	padding: 0rem 2rem;
	${mobile} {
		margin-top: 4rem;
		padding: 0 1.5rem;
	}
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
	}
	.content {
		&__less {
			width: 100%;
			max-width: 580px;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			p {
				font-family: "commuters-sans", -apple-system, BlinkMacSystemFont, Oxygen,
					Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
			}
		}
		&__more {
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			padding: 0 2rem;
			margin-bottom: ${props => (props.isMobile ? `70vh` : `0`)};
		}
	}
`;

export default ContentContainer;
