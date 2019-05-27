import styled from "styled-components";
import { mobile } from "./StyleHelpers";

export const ContentContainer = styled.article`
	padding: 0rem 2rem 4rem;
	height: 100%;
	width: 100%;
	${mobile} {
		padding: 0rem 1.5rem 2rem;
	}
	.LazyLoad {
		width: 100%;
	}
	img {
		width: 100%;
	}
	.content {
		&__header {
			position: fixed;
		}
		&__less {
			position: absolute;
			top: 0;
			left: 0;
			width: 100;
			right: 0;
			bottom: 0;
			margin-top: 4rem;
			padding: 0rem 2rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			opacity: ${props => (props.isShowingMore ? `0` : `1`)};
			${mobile} {
				padding: 2rem 1.5rem;
			}
		}
		&__more {
			margin-top: 4rem;
			transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
			opacity: ${props => (props.isShowingMore ? `1` : `0`)};
		}
	}
`;

export default ContentContainer;
