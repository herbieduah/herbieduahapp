import styled from "styled-components";
import { mobile } from "./StyleHelpers";

export const ContentContainer = styled.article`
	height: 100%;
	width: 100%;
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
			margin-top: 4rem;
			padding: 0rem 2rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			/* opacity: ${props => (props.isShowingMore ? `0` : `1`)}; */
			${mobile} {
				margin-top: 1.7rem;	
				padding: 0rem 1rem;
			}
			p {
				font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			}
			${mobile} {
				padding: 0rem 1rem;
			}
		}
		&__more {
			margin-top: 4rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			/* opacity: ${props => (props.isShowingMore ? `1` : `0`)}; */
			${mobile} {
				margin-top: 1.7rem;	
				padding: 0 1rem;
			}
		}
	}
`;

export default ContentContainer;
