import styled from "styled-components";

export const SliderContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	position: absolute;
	outline: none;
	overflow: hidden;
	user-select: text;
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

	.hdapp__resizer {
		background: #000;
		opacity: 0.2;
		z-index: 1;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-moz-background-clip: padding;
		-webkit-background-clip: padding;
		background-clip: padding-box;
	}

	.hdapp__resizer:hover {
		-webkit-transition: all 2s ease;
		transition: all 2s ease;
	}

	.hdapp__resizer.horizontal {
		height: 11px;
		margin: -5px 0;
		border-top: 5px solid rgba(255, 255, 255, 0);
		border-bottom: 5px solid rgba(255, 255, 255, 0);
		cursor: row-resize;
		width: 100%;
		background-color: red;
	}

	.hdapp__resizer.horizontal:hover {
		border-top: 5px solid rgba(0, 0, 0, 0.5);
		border-bottom: 5px solid rgba(0, 0, 0, 0.5);
		background-color: red;
	}

	.hdapp__resizer.vertical {
		width: 11px;
		margin: 0 -5px;
		border-left: 5px solid rgba(255, 255, 255, 0);
		border-right: 5px solid rgba(255, 255, 255, 0);
		cursor: col-resize;
		background-color: red;
	}

	.hdapp__resizer.vertical:hover {
		border-left: 5px solid rgba(0, 0, 0, 0.5);
		border-right: 5px solid rgba(0, 0, 0, 0.5);
	}
	.hdapp__resizer.disabled {
		cursor: not-allowed;
	}
	.hdapp__resizer.disabled:hover {
		border-color: transparent;
	}
`;

export default SliderContainer;
